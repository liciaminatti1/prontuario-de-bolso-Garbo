/* Registro central das fichas.
   Cada arquivo em fichas/<especialidade>/ chama registrarFicha({...}). Aqui os campos
   obrigatórios são conferidos; uma ficha incompleta aparece no console e não é carregada.
   O formato de cada campo está descrito em docs/ESQUEMA-FICHAS.md. */
window.FICHAS = [];

/* Especialidades = pastas dentro de fichas/. Para criar uma nova, crie a pasta
   e acrescente uma linha aqui (nome da pasta: nome exibido no app). A ordem daqui
   é a ordem dos filtros na tela. */
const ESPECIALIDADES = {
  "emergencia": "Emergência e suporte de vida",
  "cardiologia": "Cardiologia",
  "pneumologia": "Pneumologia",
  "neurologia": "Neurologia",
  "infectologia": "Infectologia",
  "endocrinologia": "Endócrino e metabólico",
  "ginecologia-obstetricia": "Ginecologia e obstetrícia",
  "pediatria": "Pediatria",
  "gastroenterologia": "Gastroenterologia",
  "hematologia": "Hematologia",
  "urologia": "Urologia e saúde do homem",
  "dermatologia": "Dermatologia",
  "oftalmo-otorrino": "Olhos, ouvido, nariz e garganta",
  "musculoesqueletico": "Ortopedia, reumatologia e dor",
  "saude-mental": "Saúde mental",
  "toxicologia": "Intoxicações e acidentes",
  "trauma": "Trauma",
  "alergia": "Alergia e imunologia",
  "prevencao": "Prevenção e rastreamento",
  "referencia": "Prescrição e referências"
};

const CAMINHOS = ["ubs", "ps"];
const PUBLICOS = ["adulto", "pediatrico", "ambos"];
const FORMATOS = ["completo", "curto"];
const LINHAS = ["l1", "alt", "adj", "ci"];

const CAMPOS_COMUNS = ["id", "especialidade", "caminho", "publico", "titulo", "resumo", "alarmes",
  "prescricao", "orientacoesRetorno", "fontes", "revisao", "versao"];
const CAMPOS_POR_FORMATO = {
  completo: ["critico", "condutaInicial", "fataisExcluir", "proximaDecisao", "clinica", "exames", "tratamento", "destino"],
  curto: ["conduta"]
};

const ehLista = v => Array.isArray(v) && v.every(x => typeof x === "string");

function validarFicha(f, jaRegistradas = window.FICHAS) {
  const erros = [];
  const formato = f.formato || "completo";
  if (!FORMATOS.includes(formato)) erros.push(`formato deve ser ${FORMATOS.join(" ou ")}`);
  for (const c of [...CAMPOS_COMUNS, ...(CAMPOS_POR_FORMATO[formato] || [])])
    if (f[c] === undefined) erros.push(`falta o campo "${c}"`);
  if (f.caminho && !CAMINHOS.includes(f.caminho)) erros.push(`caminho deve ser ${CAMINHOS.join(" ou ")}`);
  if (f.publico && !PUBLICOS.includes(f.publico)) erros.push(`publico deve ser ${PUBLICOS.join(", ")}`);
  if (f.especialidade && !ESPECIALIDADES[f.especialidade]) erros.push(`especialidade "${f.especialidade}" não existe em js/registro.js`);
  if (f.id && !/^[a-z0-9-]+$/.test(f.id)) erros.push("id deve ter só letras minúsculas, números e hífen");
  if (jaRegistradas.some(x => x.id === f.id)) erros.push(`id "${f.id}" repetido`);
  if (f.revisao && !/^\d{4}-\d{2}-\d{2}$/.test(f.revisao)) erros.push("revisao deve ser AAAA-MM-DD");
  for (const c of ["alarmes", "orientacoesRetorno", "fontes", "conduta", "condutaInicial", "fataisExcluir", "encaminhar", "diferenciais"])
    if (f[c] !== undefined && !ehLista(f[c])) erros.push(`"${c}" deve ser uma lista de textos`);
  if (formato === "curto" && f.exames !== undefined && !ehLista(f.exames)) erros.push(`no formato curto, "exames" é uma lista de textos`);
  if (f.prescricao !== undefined) {
    const p = f.prescricao;
    if (typeof p !== "object" || (!p.ambulatorial && !p.hospitalar)) erros.push(`"prescricao" precisa de "ambulatorial" e/ou "hospitalar"`);
  }
  (f.tratamento || []).forEach((t, i) => {
    if (!LINHAS.includes(t.linha)) erros.push(`tratamento[${i}].linha deve ser ${LINHAS.join(", ")}`);
  });
  (f.tabelas || []).forEach((t, i) => {
    if (!t.titulo || !Array.isArray(t.colunas) || !Array.isArray(t.linhas)) erros.push(`tabelas[${i}] precisa de titulo, colunas e linhas`);
    else if (t.linhas.some(l => !Array.isArray(l) || l.length !== t.colunas.length)) erros.push(`tabelas[${i}]: cada linha deve ter ${t.colunas.length} colunas`);
  });
  return erros;
}

function registrarFicha(f) {
  const erros = validarFicha(f);
  if (erros.length) {
    console.error(`Ficha "${f.id || f.titulo || "?"}" não carregada:\n- ` + erros.join("\n- "));
    return;
  }
  f.formato = f.formato || "completo";
  window.FICHAS.push(f);
}

if (typeof module !== "undefined") module.exports = { validarFicha, ESPECIALIDADES, CAMINHOS, PUBLICOS, FORMATOS, LINHAS };
