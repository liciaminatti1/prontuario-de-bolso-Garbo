/* Vaga Zero — base compartilhada (carregar antes dos outros arquivos do módulo).
   Contrato dos dados em docs/VAGA-ZERO.md. */
const VZ_COMPLICACOES = [];
const VZ_FARMACOS = [];
let VZ_GUIAS = {};

const VZ_GRUPOS = { respiratoria: "Respiratórias", cardiovascular: "Cardiovasculares", neurologica: "Neurológicas",
  metabolica: "Metabólicas e outras", obstetrica: "Obstétricas", neonatal: "Neonatais e pediátricas" };

const VZ_GATILHOS_BASE = ["spo2-baixa", "spo2-critica", "fr-alta", "fr-baixa", "fc-alta", "fc-muito-alta", "fc-baixa",
  "hipotensao", "pa-muito-alta", "perfusao-ruim", "glasgow-baixo", "glasgow-critico", "glicemia-baixa", "glicemia-alta",
  "hipotermia", "febre", "hiperpirexia", "dor-intensa", "vomitos",
  "o2", "vni", "vm", "via-aerea-avancada", "dva", "sedacao-continua", "insulina-iv", "sem-acesso", "acesso-unico", "sonda-vesical",
  "neonato", "pediatrico", "adulto", "idoso", "gestante", "puerpera", "obeso", "prematuro",
  "comorb:dpoc", "comorb:asma", "comorb:ic", "comorb:dac", "comorb:dm", "comorb:drc", "comorb:epilepsia", "comorb:hepatopatia",
  "comorb:has", "comorb:fa", "comorb:avc", "uso:anticoagulante", "uso:insulina", "uso:betabloqueador", "uso:opioide", "uso:antiagregante"];

/* Termos (sem acento, minúsculas) que reconhecem cada diagnóstico no texto do motivo/diagnóstico. */
const VZ_DX_TERMOS = {
  "sca": ["sca", "sindrome coronariana", "iam", "infarto", "iamcsst", "iamssst", "angina instavel", "supra de st", "supradesnivelamento"],
  "avc-isquemico": ["avc isquemico", "avci", "ave isquemico", "acidente vascular cerebral isquemico", "trombolise", "trombectomia"],
  "avc-hemorragico": ["avc hemorragico", "avch", "ave hemorragico", "hemorragia intraparenquimatosa", "hematoma intraparenquimatoso"],
  "hsa": ["hsa", "hemorragia subaracnoide", "aneurisma roto"],
  "tce": ["tce", "traumatismo cranio", "trauma cranio", "hematoma subdural", "hematoma extradural", "hematoma epidural"],
  "trauma": ["trauma", "politrauma", "acidente automobilistico", "atropelamento", "queda de altura", "ferimento por arma", "faf", "fab", "colisao"],
  "trauma-torax": ["trauma toracico", "trauma de torax", "hemotorax", "pneumotorax", "torax instavel", "contusao pulmonar"],
  "queimadura": ["queimadura", "queimado", "grande queimado"],
  "sepse": ["sepse", "septico", "choque septico", "infeccao grave"],
  "choque": ["choque", "instabilidade hemodinamica"],
  "pneumonia": ["pneumonia", "pac", "broncopneumonia"],
  "asma": ["asma", "broncoespasmo", "mal asmatico", "crise asmatica"],
  "dpoc": ["dpoc", "dpoc exacerbado", "doenca pulmonar obstrutiva"],
  "bronquiolite": ["bronquiolite"],
  "insuf-resp": ["insuficiencia respiratoria", "ira ", "irpa", "desconforto respiratorio", "sdra"],
  "eap": ["eap", "edema agudo de pulmao", "edema pulmonar"],
  "ic": ["insuficiencia cardiaca", "icc", "ic descompensada", "cardiopatia"],
  "tep": ["tep", "tromboembolismo pulmonar", "embolia pulmonar"],
  "dissecao-aorta": ["disseccao", "dissecao", "aneurisma de aorta", "aaa roto", "sindrome aortica"],
  "arritmia": ["arritmia", "fibrilacao atrial", "flutter", "taquicardia", "bradicardia", "bav", "bloqueio atrioventricular"],
  "bradiarritmia": ["bradicardia", "bav", "bloqueio atrioventricular", "bav total", "bavt"],
  "taquiarritmia": ["taquicardia", "fibrilacao atrial", "flutter", "tsv", "taquicardia ventricular", "fa de alta resposta"],
  "convulsao": ["convulsao", "crise convulsiva", "epilepsia", "estado de mal", "crise epileptica"],
  "hic": ["hipertensao intracraniana", "hic", "edema cerebral", "herniacao", "hidrocefalia"],
  "rebaixamento": ["rebaixamento", "coma", "torpor", "sonolencia", "glasgow"],
  "cad": ["cetoacidose", "cad"],
  "hipoglicemia": ["hipoglicemia"],
  "crise-hipertensiva": ["crise hipertensiva", "emergencia hipertensiva", "urgencia hipertensiva"],
  "pre-eclampsia": ["pre eclampsia", "pre-eclampsia", "dheg", "doenca hipertensiva especifica"],
  "eclampsia": ["eclampsia", "convulsao na gestacao"],
  "hellp": ["hellp"],
  "hemorragia-obstetrica": ["hemorragia pos parto", "hpp", "placenta previa", "descolamento prematuro", "dpp", "rotura uterina", "sangramento vaginal", "atonia uterina"],
  "trabalho-parto": ["trabalho de parto", "parto iminente", "periodo expulsivo"],
  "tpp": ["trabalho de parto prematuro", "tpp"],
  "rpm": ["rotura prematura", "ruptura prematura", "amniorrexe", "bolsa rota", "rpm"],
  "sofrimento-fetal": ["sofrimento fetal", "bradicardia fetal", "ctg categoria iii", "vitalidade fetal"],
  "hemorragia-digestiva": ["hda", "hdb", "hemorragia digestiva", "hematemese", "melena", "enterorragia", "varizes esofagicas"],
  "sangramento": ["hemorragia", "sangramento", "choque hemorragico"],
  "anafilaxia": ["anafilaxia", "choque anafilatico", "reacao anafilatica"],
  "intoxicacao": ["intoxicacao", "ingestao", "overdose", "envenenamento", "tentativa de suicidio"],
  "meningite": ["meningite", "meningoencefalite", "encefalite"],
  "pos-pcr": ["pos pcr", "pos-pcr", "pcr revertida", "parada revertida", "rosc", "retorno da circulacao"],
  "abdome-agudo": ["abdome agudo", "apendicite", "colecistite", "obstrucao intestinal", "perfuracao", "peritonite", "isquemia mesenterica"],
  "hipercalemia": ["hipercalemia", "potassio alto"],
  "disturbio-eletrolitico": ["hiponatremia", "hipernatremia", "hipocalemia", "hipocalcemia", "hipercalcemia", "hipomagnesemia", "disturbio hidroeletrolitico"],
  "prematuro": ["prematuro", "prematuridade", "rnpt", "pre termo"],
  "cardiopatia-congenita": ["cardiopatia congenita", "canal dependente", "cianose central"],
  "neonatal-grave": ["recem nascido", "rn ", "neonato", "neonatal", "asfixia", "desconforto respiratorio do rn"],
  "pancreatite": ["pancreatite"],
  "insuf-renal": ["insuficiencia renal", "lesao renal aguda", "lra", "drc dialitica", "uremia"]
};
const VZ_GATILHOS = [...VZ_GATILHOS_BASE, ...Object.keys(VZ_DX_TERMOS).map(k => "dx:" + k)];

const VZ_FARMACO_IDS = ["adrenalina", "noradrenalina", "dopamina", "dobutamina", "vasopressina", "atropina", "amiodarona",
  "adenosina", "lidocaina", "metoprolol", "midazolam", "diazepam", "cetamina", "etomidato", "propofol", "succinilcolina",
  "rocuronio", "fentanil", "morfina", "dipirona", "ondansetrona", "fenitoina", "fenobarbital", "levetiracetam",
  "sulfato-magnesio", "hidrocortisona", "metilprednisolona", "dexametasona", "salbutamol", "ipratropio", "furosemida",
  "nitroglicerina", "nitroprussiato", "hidralazina", "glicose", "gluconato-calcio", "bicarbonato-sodio", "insulina-regular",
  "naloxona", "flumazenil", "acido-tranexamico", "ocitocina", "manitol", "salina-hipertonica", "cristaloide", "alprostadil"];

const VZ_CATEGORIAS = { sri: "Intubação (SRI)", sedacao: "Sedação", analgesia: "Analgesia", convulsao: "Convulsões",
  pcr: "Parada cardiorrespiratória", arritmia: "Arritmias", choque: "Choque e volume", vasoativa: "Drogas vasoativas",
  anafilaxia: "Anafilaxia", broncoespasmo: "Broncoespasmo", eap: "Edema agudo de pulmão", hipoglicemia: "Hipoglicemia",
  "has-grave": "Hipertensão grave", dor: "Dor", vomito: "Vômitos", obstetricia: "Obstetrícia", neonatal: "Neonatal",
  hipercalemia: "Hipercalemia e distúrbios", antidoto: "Antídotos", hemorragia: "Hemorragia", hic: "Hipertensão intracraniana" };

/* Unidades aceitas na biblioteca e na calculadora. */
const VZ_UNIDADES_BOLUS = ["mg", "mcg", "g", "UI", "mEq", "mL", "mg/kg", "mcg/kg", "g/kg", "UI/kg", "mEq/kg", "mL/kg"];
const VZ_UNIDADES_INFUSAO = ["mcg/kg/min", "mcg/min", "mg/min", "mg/kg/h", "mcg/kg/h", "mg/h", "g/h", "UI/kg/h", "UI/h", "mL/h", "mL/kg/h", "mEq/h", "mEq/kg/h", "UI/min"];
const VZ_UNIDADES_CONC = ["mg/mL", "mcg/mL", "g/mL", "UI/mL", "mEq/mL"];

if (typeof module !== "undefined") module.exports = { VZ_COMPLICACOES, VZ_FARMACOS, get VZ_GUIAS() { return VZ_GUIAS; }, set VZ_GUIAS(v) { VZ_GUIAS = v; },
  VZ_GRUPOS, VZ_GATILHOS, VZ_DX_TERMOS, VZ_FARMACO_IDS, VZ_CATEGORIAS, VZ_UNIDADES_BOLUS, VZ_UNIDADES_INFUSAO, VZ_UNIDADES_CONC };
