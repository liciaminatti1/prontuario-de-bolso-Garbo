/* Hipóteses diagnósticas (rota #hipoteses).
   O médico descreve sinais, sintomas, sinais vitais ou um resumo de anamnese; o sistema:
   1) reconhece os achados (com sinônimos populares e negações: "nega febre", "sem dispneia");
   2) aponta sinais de gravidade pelos sinais vitais (ajustados à idade);
   3) lista diagnósticos graves que não podem passar (regras explícitas, com o motivo);
   4) ordena as fichas do sistema por afinidade com o quadro, mostrando por que combinam e a conduta inicial.
   Apoio ao raciocínio: não é diagnóstico, não substitui o exame e o julgamento clínico. */

const hpNorm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/* Achados canônicos e as formas como aparecem no texto (sem acento, minúsculo). */
const HP_SINONIMOS = {
  "dor toracica": ["dor toracica", "dor no peito", "dor precordial", "aperto no peito", "dor retroesternal", "precordialgia", "toracalgia", "angina", "peso no peito", "queimacao no peito"],
  "dispneia": ["dispneia", "falta de ar", "cansaco para respirar", "dificuldade para respirar", "dificuldade respiratoria", "desconforto respiratorio", "sufocacao", "ortopneia", "dispneico", "taquidispneia", "puxando o ar", "tiragem", "batimento de asa"],
  "tosse": ["tosse", "tossindo", "tosse produtiva", "tosse seca", "expectoracao", "catarro"],
  "febre": ["febre", "febril", "temperatura alta", "hipertermia", "calafrio", "calafrios"],
  "cefaleia": ["cefaleia", "dor de cabeca", "enxaqueca", "cefalea"],
  "cefaleia subita": ["pior dor de cabeca da vida", "cefaleia subita", "cefaleia explosiva", "cefaleia em trovoada", "cefaleia de inicio subito", "dor de cabeca subita"],
  "rigidez de nuca": ["rigidez de nuca", "rigidez nucal", "nuca rigida", "sinais meningeos", "kernig", "brudzinski"],
  "rebaixamento": ["rebaixamento", "sonolento", "sonolencia", "torporoso", "torpor", "coma", "comatoso", "confuso", "confusao mental", "desorientado", "nao responde", "inconsciente", "alteracao do nivel de consciencia", "obnubilado", "letargico", "letargia"],
  "convulsao": ["convulsao", "convulsionou", "crise convulsiva", "crise epileptica", "abalos", "ataque epileptico", "estado de mal"],
  "deficit focal": ["deficit focal", "hemiparesia", "hemiplegia", "boca torta", "desvio de rima", "fraqueza de um lado", "perda de forca", "afasia", "disartria", "fala enrolada", "dificuldade para falar", "paresia", "plegia", "hemi-hipoestesia", "formigamento de um lado"],
  "sincope": ["sincope", "desmaio", "desmaiou", "perda de consciencia", "perdeu a consciencia", "apagou", "lipotimia", "pre-sincope"],
  "palpitacao": ["palpitacao", "palpitacoes", "batedeira", "coracao acelerado"],
  "taquicardia": ["taquicardia", "taquicardico", "taquicardica"],
  "taquipneia": ["taquipneia", "taquipneico", "taquipneica", "respiracao rapida", "respirando rapido"],
  "hipotensao": ["hipotensao", "hipotenso", "hipotensa", "pressao baixa", "choque", "ma perfusao", "perfusao lentificada", "pele fria", "extremidades frias"],
  "hipoxemia": ["hipoxemia", "dessaturacao", "dessaturando", "saturacao baixa", "cianose"],
  "tontura": ["tontura", "vertigem", "zonzeira", "tonteira"],
  "dor abdominal": ["dor abdominal", "dor na barriga", "dor de barriga", "abdome doloroso", "colica abdominal", "dor epigastrica", "epigastralgia", "dor no estomago", "dor em fid", "dor em fossa iliaca", "dor em hipocondrio", "dor periumbilical", "dor em baixo ventre", "dor pelvica", "dor no pe da barriga"],
  "dor em fid": ["fossa iliaca direita", "fid", "mcburney", "blumberg"],
  "dor em hipocondrio direito": ["hipocondrio direito", "hcd", "murphy"],
  "vomitos": ["vomito", "vomitos", "vomitando", "emese", "nausea", "nauseas", "enjoo"],
  "diarreia": ["diarreia", "evacuacoes liquidas", "fezes liquidas", "fezes amolecidas", "disenteria", "intestino solto"],
  "constipacao": ["constipacao", "intestino preso", "sem evacuar", "parada de eliminacao de fezes", "parada de eliminacao de gases", "obstipacao"],
  "distensao abdominal": ["distensao abdominal", "abdome distendido", "barriga inchada", "abdome globoso"],
  "hematemese": ["hematemese", "vomito com sangue", "vomitou sangue", "borra de cafe"],
  "melena": ["melena", "fezes pretas", "fezes escuras", "fezes em borra"],
  "enterorragia": ["enterorragia", "hematoquezia", "sangue nas fezes", "sangramento retal", "sangue vivo nas fezes"],
  "ictericia": ["ictericia", "icterico", "amarelado", "olhos amarelos", "pele amarela", "colluria", "coluria"],
  "disuria": ["disuria", "ardencia ao urinar", "dor ao urinar", "ardor miccional", "queimacao ao urinar", "polaciuria", "urgencia miccional", "xixi ardendo"],
  "dor lombar": ["dor lombar", "lombalgia", "dor nas costas", "giordano", "dor no flanco", "punho percussao"],
  "hematuria": ["hematuria", "sangue na urina", "urina com sangue", "urina vermelha"],
  "oliguria": ["oliguria", "anuria", "urinando pouco", "nao urina", "diminuicao da diurese"],
  "edema": ["edema", "inchaco", "inchado", "inchada", "anasarca", "cacifo", "edema de membros inferiores"],
  "edema unilateral": ["edema unilateral", "perna inchada", "panturrilha", "empastamento", "dor na panturrilha"],
  "sangramento vaginal": ["sangramento vaginal", "sangramento transvaginal", "perda de sangue vaginal", "metrorragia", "hemorragia vaginal", "sangramento genital"],
  "atraso menstrual": ["atraso menstrual", "amenorreia", "beta hcg positivo", "bhcg positivo", "teste de gravidez positivo", "dum"],
  "corrimento": ["corrimento", "leucorreia", "secrecao vaginal", "prurido vulvar"],
  "perda de liquido": ["perda de liquido", "bolsa rota", "rotura de membranas", "liquido amniotico"],
  "contracoes": ["contracoes", "dor em colica de parto", "trabalho de parto", "dinamica uterina"],
  "exantema": ["exantema", "manchas vermelhas", "manchas na pele", "rash", "erupcao", "petequias", "vesiculas", "pintinhas vermelhas", "lesoes de pele"],
  "prurido": ["prurido", "coceira", "comichao"],
  "urticaria": ["urticaria", "placas vermelhas que cocam", "angioedema", "inchaco nos labios", "inchaco na garganta", "edema de glote"],
  "dor de garganta": ["dor de garganta", "odinofagia", "amigdalite", "faringite", "placas na garganta"],
  "otalgia": ["otalgia", "dor de ouvido", "dor no ouvido", "otorreia"],
  "coriza": ["coriza", "nariz escorrendo", "congestao nasal", "obstrucao nasal", "espirros", "rinorreia"],
  "sibilancia": ["sibilancia", "sibilos", "chiado", "chiado no peito", "broncoespasmo"],
  "hemoptise": ["hemoptise", "tosse com sangue", "escarro com sangue"],
  "dor articular": ["artralgia", "dor articular", "dor nas juntas", "artrite", "dor no joelho", "dor nas articulacoes"],
  "mialgia": ["mialgia", "dor no corpo", "dores no corpo", "dor muscular"],
  "dor retro-orbitaria": ["dor retro-orbitaria", "dor atras dos olhos", "dor retroorbitaria"],
  "trauma": ["trauma", "queda", "acidente", "atropelamento", "colisao", "agressao", "ferimento", "batida", "capotamento", "fratura"],
  "trauma craniano": ["tce", "bateu a cabeca", "trauma de cranio", "traumatismo craniano", "trauma craniano"],
  "queimadura": ["queimadura", "queimou", "escaldadura"],
  "picada": ["picada", "mordida de cobra", "ofidico", "escorpiao", "aranha", "abelha"],
  "intoxicacao": ["intoxicacao", "ingestao de", "ingeriu", "tomou varios comprimidos", "overdose", "envenenamento", "tentativa de suicidio", "chumbinho", "organofosforado"],
  "ideacao suicida": ["ideacao suicida", "quer morrer", "pensamentos de morte", "tentou se matar", "tentativa de suicidio", "autolesao"],
  "agitacao": ["agitacao", "agitado", "agressivo", "heteroagressivo", "surto", "delirio", "alucinacao"],
  "tristeza": ["tristeza", "humor deprimido", "desanimo", "anedonia", "choro facil"],
  "ansiedade": ["ansiedade", "ansioso", "crise de panico", "nervosismo", "angustia"],
  "insonia": ["insonia", "nao consegue dormir", "dificuldade para dormir"],
  "perda de peso": ["perda de peso", "emagrecimento", "perdeu peso", "caquexia"],
  "astenia": ["astenia", "fraqueza", "cansaco", "fadiga", "indisposicao", "adinamia", "prostrado", "prostracao", "hipoativo"],
  "poliuria": ["poliuria", "polidipsia", "muita sede", "urinando muito", "polifagia"],
  "dor em membro": ["dor na perna", "dor no braco", "membro frio", "membro palido", "dor em membro"],
  "dor ocular": ["dor ocular", "olho vermelho", "hiperemia conjuntival", "secrecao ocular", "baixa visual", "visao turva"],
  "lesao de pele": ["ferida", "lesao", "abscesso", "furunculo", "celulite", "erisipela", "pus", "hiperemia local", "calor local"],
  "dor testicular": ["dor testicular", "dor no testiculo", "escroto doloroso", "testiculo inchado"],
  "lactente irritado": ["choro inconsolavel", "irritabilidade", "irritado", "gemencia", "gemente", "recusa alimentar", "mamando pouco"],
  "desidratacao": ["desidratacao", "desidratado", "mucosas secas", "olhos fundos", "sinal da prega", "boca seca"],
  "hipertensao": ["hipertensao", "pressao alta", "has", "hipertenso"],
  "asma": ["asma", "asmatico", "asmatica", "bombinha", "crise asmatica"],
  "dpoc": ["dpoc", "enfisema", "bronquite cronica", "enfisematoso"],
  "cirrose": ["cirrose", "cirrotico", "cirrotica", "hepatopata", "varizes de esofago"],
  "insuficiencia cardiaca": ["insuficiencia cardiaca", "icc", "cardiopata", "cardiopatia"],
  "doenca renal": ["drc", "doenca renal", "renal cronico", "dialitico", "hemodialise"],
  "hiv": ["hiv", "aids", "soropositivo"],
  "epilepsia": ["epilepsia", "epileptico", "epileptica"],
  "falciforme": ["falciforme", "anemia falciforme", "drepanocitose"],
  "cancer": ["cancer", "neoplasia", "oncologico", "quimioterapia", "tumor"],
  "diabetes": ["diabetes", "diabetico", "dm2", "dm1", "insulina"],
  "gestante": ["gestante", "gravida", "gestacao", "semanas de gestacao", "ig "],
  "puerperio": ["puerpera", "pos-parto", "pos parto", "puerperio", "parto ha"]
};

/* Palavras sem valor discriminativo. */
const HP_STOP = new Set(("a o e de da do das dos em no na nos nas um uma uns umas com sem por para pra pro ao aos as os que se ha ja ou mas mais muito pouco " +
  "paciente pcte refere relata apresenta queixa queixas inicio iniciou hoje ontem dias dia horas hora semana semanas mes meses ano anos idade " +
  "esta estava foi tem teve vem veio sua seu suas seus ele ela eles elas quando apos antes durante tambem como cerca associado associada " +
  "quadro historia evolucao atendimento procura procurou servico ps ubs upa nega negou nao ausencia ausente normal sinais sintomas").split(" "));

const hpRadical = w => w.length > 4 ? w.replace(/(oes|aes)$/, "ao").replace(/(is)$/, "l").replace(/s$/, "") : w;
const hpTokens = s => hpNorm(s).replace(/[^a-z0-9 ]+/g, " ").split(/\s+/).filter(w => w.length > 2 && !HP_STOP.has(w)).map(hpRadical);

/* Marca trechos negados: "nega febre, tosse e dispneia", "sem dor", "ausência de". */
function hpSepararNegacoes(texto) {
  const t = hpNorm(texto);
  const negados = [];
  const positivo = t.replace(/\b(nega|negou|negando|sem|nao (?:tem|apresenta|refere|ha)|ausencia de|ausente)\b([^.;\n]*?)(?=[.;\n]|\b(?:refere|relata|apresenta|porem|mas|com|evolui|evoluiu)\b|$)/g, (m, neg, resto) => {
    negados.push(resto.trim()); return " ";
  });
  return { positivo, negados: negados.filter(Boolean).join(" ; ") };
}

/* Achados canônicos presentes num texto (já sem negações). */
function hpAchados(texto) {
  const t = " " + hpNorm(texto).replace(/[^a-z0-9 -]+/g, " ").replace(/\s+/g, " ") + " ";
  const achou = new Set();
  for (const [canon, formas] of Object.entries(HP_SINONIMOS))
    if (formas.some(f => t.includes(" " + f + " ") || t.includes(" " + f + "s ") || (f.includes(" ") && t.includes(f)))) achou.add(canon);
  return achou;
}

/* Sinais vitais → achados e sinais de gravidade (usa as referências por idade do Vaga Zero). */
function hpVitais(v, idadeAnos, gestante) {
  const n = x => { const k = Number(String(x ?? "").replace(",", ".")); return x === "" || x === undefined || x === null || !isFinite(k) ? null : k; };
  const pas = n(v.pas), pad = n(v.pad), fc = n(v.fc), fr = n(v.fr), sat = n(v.spo2), t = n(v.temp), gli = n(v.glicemia), gcs = n(v.glasgow);
  const ref = typeof vzReferenciaSV === "function" ? vzReferenciaSV(idadeAnos) : null;
  const adulto = idadeAnos === null || idadeAnos >= 18;
  const ach = new Set(), grav = [];
  const add = (g, achado, texto) => { if (achado) ach.add(achado); if (texto) grav.push({ g, t: texto }); };
  if (sat !== null) { if (sat < 85) add("critico", "hipoxemia", `SpO₂ ${sat}%: hipoxemia grave`); else if (sat < 92) add("alto", "hipoxemia", `SpO₂ ${sat}%: hipoxemia`); }
  if (fr !== null && ref) { const mx = adulto ? 22 : ref.fr[1]; if (fr > mx) add(fr > (adulto ? 30 : mx + 10) ? "alto" : "moderado", "taquipneia", `FR ${fr} irpm: taquipneia`); if (fr < (adulto ? 10 : ref.fr[0])) add("critico", null, `FR ${fr} irpm: bradipneia`); }
  if (fc !== null && ref) {
    if (fc > ref.fc[1]) add(fc > (adulto ? 130 : ref.fc[1] + 30) ? "alto" : "moderado", "taquicardia", `FC ${fc} bpm: taquicardia`);
    if (fc < (adulto ? 50 : ref.fc[0])) add(fc < (adulto ? 40 : 60) ? "critico" : "alto", null, `FC ${fc} bpm: bradicardia`);
  }
  if (pas !== null && ref) {
    const pam = pad !== null ? (pas + 2 * pad) / 3 : null;
    if (pas < ref.pasMin || (adulto && pam !== null && pam < 65)) add("critico", "hipotensao", `PA ${pas}${pad !== null ? "×" + pad : ""}: hipotensão`);
    if (adulto && (pas >= 180 || (pad !== null && pad >= 120))) add("alto", "hipertensao", `PA ${pas}×${pad ?? "?"}: pressão muito elevada`);
    else if (gestante && (pas >= 140 || (pad !== null && pad >= 90))) add(pas >= 160 || (pad ?? 0) >= 110 ? "alto" : "moderado", "hipertensao", `PA ${pas}×${pad ?? "?"} em gestante`);
  }
  if (t !== null) { if (t >= 37.8) add(t >= 40 ? "alto" : "moderado", "febre", `Temperatura ${t} °C`); if (t < 35) add("alto", null, `Temperatura ${t} °C: hipotermia`); }
  if (gli !== null) { if (gli < 70) add("critico", "rebaixamento", `Glicemia ${gli} mg/dL: hipoglicemia`); if (gli > 250) add("alto", "poliuria", `Glicemia ${gli} mg/dL: hiperglicemia`); }
  if (gcs !== null) { if (gcs <= 8) add("critico", "rebaixamento", `Glasgow ${gcs}: proteção de via aérea`); else if (gcs <= 13) add("alto", "rebaixamento", `Glasgow ${gcs}`); }
  /* Índice de choque no adulto. */
  if (adulto && fc !== null && pas !== null && pas > 0 && fc / pas >= 1) add("alto", "hipotensao", `Índice de choque ${(fc / pas).toFixed(1)} (FC/PAS ≥ 1)`);
  return { achados: ach, gravidade: grav, valores: { pas, pad, fc, fr, sat, t, gli, gcs } };
}

/* "Não deixe passar": regras explícitas. A = achados, V = valores, P = perfil. */
const HP_VERMELHAS = [
  { dx: ["sca", "tep", "sindrome-aortica-aguda", "pneumotorax", "pericardite-tamponamento"], se: (A) => A.has("dor toracica"), motivo: "Dor torácica: excluir SCA (ECG em até 10 min), TEP, dissecção de aorta, pneumotórax e tamponamento." },
  { dx: ["hemorragia-subaracnoidea"], se: (A) => A.has("cefaleia subita") || (A.has("cefaleia") && (A.has("sincope") || A.has("rebaixamento") || A.has("rigidez de nuca"))), motivo: "Cefaleia súbita/intensa ou com alteração neurológica: excluir hemorragia subaracnoide." },
  { dx: ["meningite"], se: (A) => A.has("febre") && (A.has("rigidez de nuca") || (A.has("cefaleia") && (A.has("vomitos") || A.has("rebaixamento"))) || (A.has("exantema") && A.has("rebaixamento"))), motivo: "Febre com cefaleia, rigidez de nuca, vômitos, petéquias ou alteração de consciência: meningite/meningococcemia." },
  { dx: ["avc", "avc-hemorragico"], se: (A) => A.has("deficit focal"), motivo: "Déficit neurológico focal agudo: AVC — horário do início dos sintomas define trombólise/trombectomia." },
  { dx: ["sepse", "sepse-pediatrica"], se: (A, V, P) => (A.has("febre") || (V.t !== null && V.t < 36)) && ((V.fc !== null && V.fc > (P.adulto ? 90 : 160)) || (V.fr !== null && V.fr >= (P.adulto ? 22 : 40)) || (V.pas !== null && V.pas < (P.adulto ? 100 : 70)) || A.has("rebaixamento")), motivo: "Febre/hipotermia com taquicardia, taquipneia, hipotensão ou confusão: sepse (qSOFA/pacote da 1ª hora)." },
  { dx: ["choque"], se: (A, V, P) => V.pas !== null && (V.pas < (P.adulto ? 90 : 70) || (P.adulto && V.fc !== null && V.fc / V.pas >= 1)), motivo: "Hipotensão ou índice de choque ≥ 1: choque — identificar o tipo e iniciar ressuscitação." },
  { dx: ["insuficiencia-respiratoria-aguda", "tep", "pneumonia", "ic-descompensada"], se: (A, V) => V.sat !== null && V.sat < 92, motivo: "Hipoxemia: insuficiência respiratória — pensar em pneumonia, TEP, EAP/IC, broncoespasmo." },
  { dx: ["anafilaxia"], se: (A) => A.has("urticaria") && (A.has("dispneia") || A.has("sibilancia") || A.has("vomitos") || A.has("sincope")), motivo: "Urticária/angioedema com sintoma respiratório, gastrointestinal ou hipotensão: anafilaxia — adrenalina IM." },
  { dx: ["gravidez-ectopica"], se: (A, V, P) => P.mulherFertil && (A.has("dor abdominal") || A.has("sangramento vaginal")) && (A.has("atraso menstrual") || A.has("gestante")), motivo: "Mulher em idade fértil com dor abdominal/sangramento e atraso ou β-hCG positivo: excluir gravidez ectópica." },
  { dx: ["hipertensao-gestacao"], se: (A, V, P) => (P.gestante || P.puerpera) && (A.has("hipertensao") || A.has("cefaleia") || A.has("convulsao") || (V.pas !== null && V.pas >= 140)), motivo: "Gestante/puérpera com hipertensão, cefaleia ou convulsão: pré-eclâmpsia grave/eclâmpsia/HELLP." },
  { dx: ["sangramento-segunda-metade", "abortamento"], se: (A, V, P) => P.gestante && A.has("sangramento vaginal"), motivo: "Sangramento na gestação: 1ª metade (abortamento, ectópica, mola) ou 2ª metade (placenta prévia, DPP)." },
  { dx: ["cetoacidose", "cad-pediatrica"], se: (A, V) => (V.gli !== null && V.gli > 250 && (A.has("vomitos") || A.has("dor abdominal") || A.has("dispneia") || A.has("rebaixamento"))) || (A.has("diabetes") && A.has("vomitos") && A.has("dor abdominal")), motivo: "Hiperglicemia com vômitos, dor abdominal, taquipneia ou rebaixamento: cetoacidose/estado hiperosmolar." },
  { dx: ["hipoglicemia"], se: (A, V) => V.gli !== null && V.gli < 70, motivo: "Glicemia < 70 mg/dL: tratar a hipoglicemia agora." },
  { dx: ["apendicite", "abdome-agudo-perfurativo", "obstrucao-intestinal", "isquemia-mesenterica", "dor-abdominal-aguda"], se: (A, V, P) => A.has("dor abdominal") && (A.has("dor em fid") || A.has("febre") || A.has("vomitos") || A.has("distensao abdominal") || A.has("constipacao") || (V.pas !== null && V.pas < 100) || P.idoso), motivo: "Dor abdominal com febre, vômitos, distensão, parada de eliminações, hipotensão ou idoso: abdome agudo cirúrgico." },
  { dx: ["hemorragia-digestiva-alta", "hemorragia-digestiva-baixa"], se: (A) => A.has("hematemese") || A.has("melena") || A.has("enterorragia"), motivo: "Hematêmese, melena ou enterorragia: hemorragia digestiva — estabilizar, Glasgow-Blatchford, EDA." },
  { dx: ["sincope", "taquicardias", "bradicardias", "tep"], se: (A) => A.has("sincope"), motivo: "Síncope: excluir causa cardíaca (arritmia, estenose aórtica), TEP e hemorragia." },
  { dx: ["convulsao", "rebaixamento-consciencia"], se: (A) => A.has("convulsao") || A.has("rebaixamento"), motivo: "Convulsão ou rebaixamento: glicemia capilar, ABC, causas estruturais, metabólicas e tóxicas." },
  { dx: ["torcao-anexial"], se: (A, V, P) => P.mulher && A.has("dor abdominal") && A.has("vomitos") && !A.has("diarreia"), motivo: "Dor pélvica/abdominal súbita com vômitos em mulher: considerar torção anexial (emergência cirúrgica)." },
  { dx: ["escroto-agudo"], se: (A) => A.has("dor testicular"), motivo: "Dor testicular aguda: torção até prova em contrário (janela de 6 h)." },
  { dx: ["intoxicacoes-exogenas", "risco-suicida"], se: (A) => A.has("intoxicacao") || A.has("ideacao suicida"), motivo: "Intoxicação ou risco suicida: centro de toxicologia (0800 722 6001), antídoto e avaliação de risco." },
  { dx: ["tce-moderado-grave", "politrauma-abcde"], se: (A, V) => A.has("trauma craniano") || (A.has("trauma") && (A.has("rebaixamento") || (V.pas !== null && V.pas < 100))), motivo: "Trauma com rebaixamento, TCE ou instabilidade: ATLS (XABCDE)." },
  { dx: ["febre-lactente", "crianca-grave"], se: (A, V, P) => P.idadeAnos !== null && P.idadeAnos < 0.25 && (A.has("febre") || A.has("lactente irritado")), motivo: "Febre no lactente < 3 meses: risco de infecção bacteriana grave." },
  { dx: ["dengue"], se: (A) => A.has("febre") && (A.has("mialgia") || A.has("dor retro-orbitaria") || A.has("exantema") || A.has("dor articular")), motivo: "Febre com mialgia, dor retro-orbitária ou exantema: arbovirose — pesquisar sinais de alarme da dengue." },
  { dx: ["fasciite-necrosante"], se: (A, V) => A.has("lesao de pele") && A.has("febre") && ((V.fc !== null && V.fc > 110) || (V.pas !== null && V.pas < 100)), motivo: "Infecção de pele com febre e instabilidade: excluir infecção necrotizante (dor desproporcional)." },
  { dx: ["has-emerg"], se: (A, V) => V.pas !== null && (V.pas >= 180 || (V.pad ?? 0) >= 120) && (A.has("dor toracica") || A.has("dispneia") || A.has("deficit focal") || A.has("rebaixamento") || A.has("cefaleia")), motivo: "PA ≥ 180/120 com sintoma de lesão de órgão-alvo: emergência hipertensiva." },
  { dx: ["crise-falciforme"], se: (A, V, P, texto) => /falciforme|anemia falciforme/.test(texto) && (A.has("dor toracica") || A.has("febre") || A.has("dispneia")), motivo: "Doença falciforme com febre, dor torácica ou dispneia: síndrome torácica aguda/sepse." },
  { dx: ["pielonefrite"], se: (A) => A.has("febre") && (A.has("disuria") || A.has("dor lombar")), motivo: "Febre com sintomas urinários ou dor lombar: pielonefrite." }
];

/* Índice das fichas (montado uma vez). */
let HP_INDICE = null;
function hpMontarIndice() {
  if (HP_INDICE) return HP_INDICE;
  const docs = [];
  const df = new Map();
  for (const f of FICHAS) {
    if (f.formato === "procedimento" || f.especialidade === "referencia" || f.especialidade === "procedimentos") continue;
    const campos = [
      [f.titulo, 3], [f.palavrasChave || "", 2.2], [f.resumo, 1.5], [(f.alarmes || []).join(" "), 1],
      [f.clinica ? [...(f.clinica.anamnese || []), ...(f.clinica.exameFisico || [])].join(" ") : (f.conduta || []).slice(0, 3).join(" "), 0.8],
      [f.clinica ? (f.clinica.diferenciais || []).map(d => d.pista).join(" ") : (f.diferenciais || []).join(" "), 0.4]
    ];
    const peso = new Map();
    for (const [txt, w] of campos) {
      const toks = hpTokens(txt);
      for (let i = 0; i < toks.length; i++) {
        for (const t of [toks[i], i + 1 < toks.length ? toks[i] + " " + toks[i + 1] : null]) if (t) peso.set(t, Math.max(peso.get(t) || 0, w));
      }
    }
    /* Achados canônicos presentes no texto da ficha. */
    const textoFicha = campos.map(c => c[0]).join(" ");
    const canon = hpAchados(textoFicha);
    for (const c of canon) peso.set("§" + c, Math.max(peso.get("§" + c) || 0, hpAchados(f.titulo + " " + (f.palavrasChave || "")).has(c) ? 3 : 1.5));
    for (const t of peso.keys()) df.set(t, (df.get(t) || 0) + 1);
    docs.push({ f, peso, tamanho: peso.size });
  }
  HP_INDICE = { docs, df, N: docs.length };
  return HP_INDICE;
}

/* Perfil do paciente. */
function hpPerfil(e) {
  const idadeAnos = typeof vzIdadeAnos === "function" ? vzIdadeAnos(e.idade, e.idadeUnidade || "anos") : (e.idade === "" ? null : Number(e.idade));
  const mulher = e.sexo === "F";
  return { idadeAnos, mulher, homem: e.sexo === "M", gestante: e.gestante === "sim", puerpera: e.gestante === "puerpera",
    adulto: idadeAnos === null || idadeAnos >= 18, crianca: idadeAnos !== null && idadeAnos < 18, idoso: idadeAnos !== null && idadeAnos >= 65,
    mulherFertil: mulher && (idadeAnos === null || (idadeAnos >= 10 && idadeAnos <= 55)) };
}

/* Compatibilidade da ficha com o perfil (multiplicador). */
function hpFatorPerfil(f, P) {
  const tit = hpNorm(f.titulo + " " + f.id);
  let k = 1;
  if (P.idadeAnos !== null) {
    if (P.adulto && f.publico === "pediatrico") k *= 0.25;
    if (P.crianca && f.publico === "adulto") k *= 0.4;
    if (!(P.idadeAnos < 28 / 365.25) && /neonat|recem-nascido|rn |prematur|ictericia-neonatal|reanimacao-neonatal/.test(tit)) k *= 0.2;
    if (P.idadeAnos >= 2 && /lactente|bronquiolite|colica-gases|refluxo-lactente|exantema-subito|febre-lactente|dermatite-fraldas/.test(tit)) k *= 0.3;
  }
  const obst = f.especialidade === "ginecologia-obstetricia" && /gest|parto|puerper|prenatal|pre-natal|obito-fetal|abort|ectopica|trofoblast|placent|amamenta|rotura-membranas|eclampsia|cesar|isoimun|corioamnion|vitalidade|liquido-amniotico|restricao-crescimento|gemelar|cordao|distoci|inducao/.test(tit);
  if (P.homem && f.especialidade === "ginecologia-obstetricia") k *= 0.05;
  if (P.homem && /mastite|mastalgia/.test(tit)) k *= 0.1;
  if (obst && !(P.gestante || P.puerpera) && !/abort|ectopica|trofoblast|diagnostico-gestacao/.test(tit)) k *= P.mulherFertil ? 0.35 : 0.1;
  if (P.mulher && /prostat|hpb|escroto|priapismo|parafimose/.test(tit)) k *= 0.05;
  if (P.gestante && obst) k *= 1.5;
  return k;
}

/* Completa idade, sexo e gestação a partir do texto quando não foram informados. */
function hpInferir(e) {
  const r = { ...e }, tn = hpNorm(e.texto);
  if (!r.idade && r.idade !== 0) {
    const m = tn.match(/\b(\d{1,3})\s*(anos?|a\b|mes(?:es)?|semanas? de vida|semanas?|dias?(?: de vida)?)\b/);
    if (m && !/semanas? de gestacao|sem de gestacao|ig/.test(tn.slice(Math.max(0, m.index - 6), m.index + m[0].length + 14))) {
      if (/^sem/.test(m[2])) { r.idade = String(+m[1] * 7); r.idadeUnidade = "dias"; }
      else { r.idade = m[1]; r.idadeUnidade = /^d/.test(m[2]) ? "dias" : /^m/.test(m[2]) ? "meses" : "anos"; }
    } else if (/\b(recem-nascido|recem nascido|neonato)\b/.test(tn)) { r.idade = "7"; r.idadeUnidade = "dias"; }
    else if (/\blactente\b/.test(tn)) { r.idade = "6"; r.idadeUnidade = "meses"; r.idadeEstimada = true; }
  }
  if (!r.sexo) { if (/\b(mulher|feminino|gestante|gravida|puerpera|menina|senhora|paciente do sexo f)\b/.test(tn)) r.sexo = "F"; else if (/\b(homem|masculino|menino|senhor|rapaz)\b/.test(tn)) r.sexo = "M"; }
  if (!r.gestante) { if (/\b(gestante|gravida|semanas de gestacao)\b/.test(tn)) r.gestante = "sim"; else if (/\b(puerpera|pos-parto|pos parto)\b/.test(tn)) r.gestante = "puerpera"; }
  return r;
}

/* Análise principal. e = { texto, idade, idadeUnidade, sexo, gestante, sv: {pas,pad,fc,fr,spo2,temp,glicemia,glasgow} } */
function hpAnalisar(entrada) {
  const e = hpInferir(entrada);
  const P = hpPerfil(e);
  const { positivo, negados } = hpSepararNegacoes(e.texto || "");
  const achTexto = hpAchados(positivo);
  const achNeg = [...hpAchados(negados)].filter(a => !achTexto.has(a));
  const V = hpVitais(e.sv || {}, P.idadeAnos, P.gestante);
  const A = new Set([...achTexto, ...V.achados]);
  if (P.gestante) A.add("gestante");
  const vazio = !hpNorm(e.texto).trim() && !V.gravidade.length && !A.size;
  if (vazio) return { vazio: true };

  /* Termos da consulta: palavras, pares de palavras e achados canônicos (×2). */
  const toks = hpTokens(positivo + " " + [...V.achados].join(" "));
  const consulta = new Map();
  toks.forEach((t, i) => { consulta.set(t, 1); if (i + 1 < toks.length) consulta.set(t + " " + toks[i + 1], 1.3); });
  for (const a of A) consulta.set("§" + a, 2.2);
  const negTerms = new Set([...achNeg].map(a => "§" + a));

  const idx = hpMontarIndice();
  const res = [];
  for (const d of idx.docs) {
    let s = 0; const motivos = new Set();
    for (const [t, wq] of consulta) {
      const w = d.peso.get(t); if (!w) continue;
      const idf = Math.log(1 + idx.N / (idx.df.get(t) || 1));
      s += wq * w * idf;
      if (t.startsWith("§")) motivos.add(t.slice(1));
    }
    for (const t of negTerms) if ((d.peso.get(t) || 0) >= 3) s *= 0.7;   // achado central da ficha foi negado
    if (!s) continue;
    /* Cobertura: fichas que explicam vários achados do quadro valem mais que um termo solto. */
    const cobertura = A.size ? motivos.size / A.size : 0;
    s = s / (1 + 0.12 * Math.log(1 + d.tamanho)) * hpFatorPerfil(d.f, P) * (1 + 0.6 * cobertura + 0.15 * Math.max(0, motivos.size - 1));
    res.push({ f: d.f, s, motivos: [...motivos] });
  }
  res.sort((a, b) => b.s - a.s);
  const max = res.length ? res[0].s : 1;

  /* Não deixe passar. */
  const textoN = hpNorm(e.texto);
  const vermelhas = [];
  for (const r of HP_VERMELHAS) {
    try { if (!r.se(A, V.valores, P, textoN)) continue; } catch (err) { continue; }
    const fichas = r.dx.map(id => FICHAS.find(f => f.id === id)).filter(f => f && hpFatorPerfil(f, P) >= 0.35);
    if (fichas.length) vermelhas.push({ motivo: r.motivo, fichas });
  }
  const idsVermelhos = new Set(vermelhas.flatMap(v => v.fichas.map(f => f.id)));
  /* Diagnósticos graves acionados pelas regras sobem na lista (e entram nela se o texto não os citou). */
  for (const r of res) if (idsVermelhos.has(r.f.id)) r.s *= 1.6;
  for (const id of idsVermelhos) if (!res.some(r => r.f.id === id)) { const f = FICHAS.find(x => x.id === id); if (f) res.push({ f, s: 0.5 * max, motivos: ["regra de gravidade"] }); }
  res.sort((a, b) => b.s - a.s);
  const max2 = res.length ? res[0].s : 1;
  const hipoteses = res.slice(0, 12).map(r => ({ ...r, afinidade: Math.round(100 * r.s / max2), grave: idsVermelhos.has(r.f.id) }))
    .filter((h, i) => i < 3 || h.grave || h.afinidade >= 22);
  return { vazio: false, inferido: e, perfil: P, achados: [...achTexto], vitaisAchados: [...V.achados], negados: achNeg, gravidade: V.gravidade, vermelhas, hipoteses };
}

/* ---------- tela ---------- */
let HP_ESTADO = { texto: "", idade: "", idadeUnidade: "anos", sexo: "", gestante: "", sv: {} };
try { const s = sessionStorage.getItem("hp-entrada"); if (s) HP_ESTADO = Object.assign(HP_ESTADO, JSON.parse(s)); } catch (e) {}
const HP_EXEMPLOS = [
  "Homem 58 anos, dor no peito em aperto há 2 horas irradiando para braço esquerdo, sudorese, náuseas. Hipertenso e diabético.",
  "Mulher 26 anos, dor abdominal em baixo ventre há 6 h, atraso menstrual de 7 semanas, sangramento vaginal discreto. Nega febre.",
  "Criança 4 anos, febre há 3 dias, tosse, falta de ar, tiragem subcostal. Nega vômitos.",
  "Idoso 79 anos, confuso desde ontem, febre, ardência ao urinar. Nega dor torácica."
];

function telaHipoteses() {
  const e = HP_ESTADO;
  const sv = (k, rot, ph = "") => `<label class="campo"><span>${rot}</span><input data-hpsv="${k}" inputmode="decimal" value="${esc(e.sv[k] ?? "")}" placeholder="${ph}"></label>`;
  const voz = (window.SpeechRecognition || window.webkitSpeechRecognition) ? `<button class="seg" id="hp-voz" type="button">${ic("mic")} Ditar</button>` : "";
  $app.innerHTML = `<div class="view hp">
    <div class="f-head"><h2>Hipóteses diagnósticas</h2><p>Descreva sinais, sintomas, sinais vitais ou a anamnese. O sistema reconhece os achados (inclusive negações como "nega febre") e cruza com as ${FICHAS.length} fichas.</p></div>
    <div class="vz-aviso" role="note">${ic("alerta")}<span><b>Apoio ao raciocínio clínico.</b> As hipóteses são ordenadas por afinidade com o texto, não por probabilidade; não substituem a anamnese completa, o exame físico e o julgamento médico.</span></div>
    <section class="vz-card">
      <label class="campo largo" for="hp-texto"><span>Quadro clínico</span>
        <textarea id="hp-texto" rows="5" placeholder="Ex.: mulher, 32 anos, febre há 2 dias, ardência ao urinar e dor lombar à direita; nega corrimento.">${esc(e.texto)}</textarea></label>
      <div class="hp-ex">${HP_EXEMPLOS.map((x, i) => `<button class="cchip" data-hpex="${i}" type="button">Exemplo ${i + 1}</button>`).join("")}</div>
      <div class="form-doc hp-perfil">
        <label class="campo"><span>Idade</span><span class="vz-dupla"><input id="hp-idade" inputmode="decimal" value="${esc(e.idade)}"><select id="hp-idade-u">${["anos", "meses", "dias"].map(u => `<option ${e.idadeUnidade === u ? "selected" : ""}>${u}</option>`).join("")}</select></span></label>
        <label class="campo"><span>Sexo</span><select id="hp-sexo">${[["", "—"], ["F", "Feminino"], ["M", "Masculino"]].map(([v, t]) => `<option value="${v}" ${e.sexo === v ? "selected" : ""}>${t}</option>`).join("")}</select></label>
        <label class="campo"><span>Gestação</span><select id="hp-gest">${[["", "—"], ["nao", "Não"], ["sim", "Gestante"], ["puerpera", "Puérpera"]].map(([v, t]) => `<option value="${v}" ${e.gestante === v ? "selected" : ""}>${t}</option>`).join("")}</select></label>
      </div>
      <details class="vz-sec" ${Object.values(e.sv).some(Boolean) ? "open" : ""}><summary>Sinais vitais (opcional)</summary>
        <div class="form-doc hp-sv">${sv("pas", "PAS")}${sv("pad", "PAD")}${sv("fc", "FC")}${sv("fr", "FR")}${sv("spo2", "SpO₂ %")}${sv("temp", "T °C")}${sv("glicemia", "Glicemia")}${sv("glasgow", "Glasgow")}</div></details>
      <div class="vz-acoes-linha"><button class="vz-btn-grande" id="hp-analisar" type="button">${ic("busca")} Analisar</button>${voz}<button class="seg" id="hp-limpar" type="button">Limpar</button></div>
    </section>
    <div id="hp-res"></div>
  </div>`;
  const $t = document.getElementById("hp-texto");
  const ler = () => {
    e.texto = $t.value; e.idade = document.getElementById("hp-idade").value.trim(); e.idadeUnidade = document.getElementById("hp-idade-u").value;
    e.sexo = document.getElementById("hp-sexo").value; e.gestante = document.getElementById("hp-gest").value;
    $app.querySelectorAll("[data-hpsv]").forEach(i => e.sv[i.dataset.hpsv] = i.value.trim());
    try { sessionStorage.setItem("hp-entrada", JSON.stringify(e)); } catch (err) {}
  };
  const analisar = () => {
    ler();
    const r = hpAnalisar(e);
    /* Mostra nos campos o que foi entendido do texto (idade, sexo, gestação). */
    if (!r.vazio && r.inferido) {
      if (!e.idade && r.inferido.idade && !r.inferido.idadeEstimada) { e.idade = r.inferido.idade; e.idadeUnidade = r.inferido.idadeUnidade; document.getElementById("hp-idade").value = e.idade; document.getElementById("hp-idade-u").value = e.idadeUnidade; }
      if (!e.sexo && r.inferido.sexo) { e.sexo = r.inferido.sexo; document.getElementById("hp-sexo").value = e.sexo; }
      if (!e.gestante && r.inferido.gestante) { e.gestante = r.inferido.gestante; document.getElementById("hp-gest").value = e.gestante; }
    }
    hpMostrar(r);
  };
  document.getElementById("hp-analisar").onclick = () => { analisar(); document.getElementById("hp-res").scrollIntoView({ behavior: "smooth", block: "start" }); };
  $t.addEventListener("keydown", ev => { if (ev.key === "Enter" && (ev.ctrlKey || ev.metaKey)) analisar(); });
  document.getElementById("hp-limpar").onclick = () => { HP_ESTADO = { texto: "", idade: "", idadeUnidade: "anos", sexo: "", gestante: "", sv: {} }; try { sessionStorage.removeItem("hp-entrada"); } catch (err) {} telaHipoteses(); };
  $app.querySelectorAll("[data-hpex]").forEach(b => b.onclick = () => { HP_ESTADO = { texto: HP_EXEMPLOS[+b.dataset.hpex], idade: "", idadeUnidade: "anos", sexo: "", gestante: "", sv: {} }; telaHipoteses(); document.getElementById("hp-analisar").click(); });
  const bv = document.getElementById("hp-voz");
  if (bv) bv.onclick = () => {
    const R = new (window.SpeechRecognition || window.webkitSpeechRecognition)(); R.lang = "pt-BR"; R.interimResults = false;
    bv.classList.add("ouvindo"); R.onresult = ev => { $t.value = ($t.value ? $t.value + " " : "") + ev.results[0][0].transcript; };
    R.onend = () => bv.classList.remove("ouvindo"); R.onerror = () => bv.classList.remove("ouvindo"); try { R.start(); } catch (err) { bv.classList.remove("ouvindo"); }
  };
  if (e.texto || Object.values(e.sv).some(Boolean)) hpMostrar(hpAnalisar(e));
}

const HP_NOMES = { "dor toracica": "dor torácica", "cefaleia subita": "cefaleia súbita", "rebaixamento": "rebaixamento de consciência", "convulsao": "convulsão",
  "deficit focal": "déficit focal", "sincope": "síncope", "palpitacao": "palpitação", "dor em fid": "dor em FID", "dor em hipocondrio direito": "dor em hipocôndrio direito",
  "vomitos": "vômitos", "constipacao": "constipação", "distensao abdominal": "distensão abdominal", "hematemese": "hematêmese", "ictericia": "icterícia",
  "disuria": "disúria", "hematuria": "hematúria", "oliguria": "oligúria", "perda de liquido": "perda de líquido", "contracoes": "contrações", "urticaria": "urticária/angioedema",
  "sibilancia": "sibilância", "dor retro-orbitaria": "dor retro-orbitária", "intoxicacao": "intoxicação", "agitacao": "agitação", "insonia": "insônia",
  "poliuria": "poliúria/polidipsia", "lesao de pele": "lesão de pele", "desidratacao": "desidratação", "hipertensao": "hipertensão", "puerperio": "puerpério",
  "taquipneia": "taquipneia", "hipotensao": "hipotensão", "insuficiencia cardiaca": "insuficiência cardíaca", "doenca renal": "doença renal", "hiv": "HIV",
  "dpoc": "DPOC", "falciforme": "doença falciforme", "cancer": "câncer", "ideacao suicida": "ideação suicida", "dor testicular": "dor testicular" };
const HP_ROT_ACHADO = a => { const n = HP_NOMES[a] || a; return n.charAt(0).toUpperCase() + n.slice(1); };
function hpConduta(f) {
  const itens = (f.condutaInicial || f.conduta || f.indicacoes || []).slice(0, 4);
  return itens.length ? `<ol>${itens.map(x => `<li>${esc(x)}</li>`).join("")}</ol>` : "";
}
function hpExames(f) {
  const ex = Array.isArray(f.exames) ? f.exames.slice(0, 3).map(x => typeof x === "string" ? x : x.nome) : [];
  return ex.length ? `<p class="hp-ex-l"><b>Exames:</b> ${esc(ex.join(" · "))}</p>` : "";
}
function hpMostrar(r) {
  const $r = document.getElementById("hp-res");
  if (r.vazio) { $r.innerHTML = `<p class="empty">Descreva o quadro para ver as hipóteses.</p>`; return; }
  const P = r.perfil;
  const cor = { critico: "vz-critico", alto: "vz-alto", moderado: "vz-atencao" };
  $r.innerHTML = `
    <section class="vz-card hp-achados"><h3>Achados reconhecidos</h3>
      <div class="hp-chips">${[...r.achados].map(a => `<span class="hp-chip">${esc(HP_ROT_ACHADO(a))}</span>`).join("")}${r.vitaisAchados.filter(a => !r.achados.includes(a)).map(a => `<span class="hp-chip sv">${esc(HP_ROT_ACHADO(a))} (sinais vitais)</span>`).join("")}${r.negados.map(a => `<span class="hp-chip neg">sem ${esc(HP_NOMES[a] || a)}</span>`).join("")}</div>
      <p class="note">Perfil: ${P.idadeAnos === null ? "idade não informada" : P.idadeAnos < 1 ? "lactente/RN" : P.crianca ? "criança/adolescente" : P.idoso ? "idoso" : "adulto"}${P.mulher ? " · feminino" : P.homem ? " · masculino" : ""}${P.gestante ? " · gestante" : ""}. ${!r.achados.length ? "Nenhum achado padrão reconhecido; as hipóteses usam as palavras do texto." : ""}</p></section>
    ${r.gravidade.length ? `<section class="vz-card vz-c-critico"><h3>Sinais de gravidade</h3><ul class="vz-acoes-lista">${r.gravidade.sort((a, b) => ["critico", "alto", "moderado"].indexOf(a.g) - ["critico", "alto", "moderado"].indexOf(b.g)).map(g => `<li class="${cor[g.g]}">${esc(g.t)}</li>`).join("")}</ul>
      ${r.gravidade.some(g => g.g === "critico") ? `<p class="hp-abc"><b>Prioridade:</b> monitorizar, ABC (via aérea, O₂, acesso venoso), glicemia capilar e chamar ajuda antes de prosseguir a investigação.</p>` : ""}</section>` : ""}
    ${r.vermelhas.length ? `<section class="vz-card vz-c-alto"><h3>Não deixe passar</h3>${r.vermelhas.map(v => `<div class="hp-verm"><p>${esc(v.motivo)}</p><div class="hp-chips">${v.fichas.map(f => `<a class="cchip hp-link-grave" href="#${f.id}">${esc(f.titulo)}</a>`).join("")}</div></div>`).join("")}</section>` : ""}
    <section class="vz-card"><h3>Hipóteses por afinidade com o quadro</h3>
      ${r.hipoteses.length ? r.hipoteses.map((h, i) => `<details class="hp-hip ${h.grave ? "grave" : ""}" ${i < 3 ? "open" : ""}>
        <summary><span class="hp-barra"><i style="width:${h.afinidade}%"></i></span><b>${esc(h.f.titulo)}</b>${h.grave ? ` <span class="tag ci">grave</span>` : ""}<small>${esc(ESPECIALIDADES[h.f.especialidade])} · ${h.f.caminho === "ps" ? "PS" : "UBS"}</small></summary>
        ${h.motivos.length ? `<p class="hp-por"><b>Combina com:</b> ${esc(h.motivos.map(m => HP_NOMES[m] || m).join(", "))}</p>` : ""}
        <p>${esc(h.f.resumo)}</p>
        ${(h.f.alarmes || []).length ? `<p class="hp-alarm"><b>Sinais de alarme:</b> ${esc(h.f.alarmes.slice(0, 3).join("; "))}</p>` : ""}
        ${hpConduta(h.f) ? `<h4>Primeira conduta</h4>${hpConduta(h.f)}` : ""}
        ${h.f.proximaDecisao ? `<p class="hp-prox"><b>Próxima decisão:</b> ${esc(h.f.proximaDecisao)}</p>` : ""}
        ${hpExames(h.f)}
        <a class="seg hp-abrir" href="#${h.f.id}">Abrir ficha completa →</a></details>`).join("")
      : `<p class="empty">Nenhuma ficha combinou com o texto. Use termos clínicos ou descreva mais achados.</p>`}
      <p class="note">Afinidade = quanto o texto combina com a ficha (100% = a mais próxima desta busca); não é probabilidade.</p></section>`;
}

if (typeof module !== "undefined") module.exports = { hpAnalisar, hpAchados, hpSepararNegacoes, hpVitais, HP_SINONIMOS, HP_VERMELHAS };
