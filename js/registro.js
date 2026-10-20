/* Registro central das fichas.
   Cada arquivo em fichas/<especialidade>/ chama registrarFicha({...}). Aqui os campos
   obrigatórios são conferidos; uma ficha incompleta aparece no console e não é carregada. */
window.FICHAS = [];

/* Especialidades = pastas dentro de fichas/. Para criar uma nova, crie a pasta
   e acrescente uma linha aqui (nome da pasta: nome exibido no app). A ordem daqui
   é a ordem dos filtros na tela. */
const ESPECIALIDADES = {
  "cardiologia": "Cardiologia",
  "pneumologia": "Pneumologia",
  "neurologia": "Neurologia",
  "infectologia": "Infectologia",
  "endocrinologia": "Endócrino e metabólico",
  "pediatria": "Pediatria",
  "dermatologia": "Dermatologia",
  "saude-mental": "Saúde mental",
  "musculoesqueletico": "Musculoesquelético",
  "trauma": "Trauma",
  "alergia": "Alergia e imunologia"
};

const CAMPOS_OBRIGATORIOS = [
  "id", "especialidade", "caminho", "titulo", "resumo", "critico", "alarmes", "condutaInicial",
  "fataisExcluir", "proximaDecisao", "clinica", "exames", "tratamento",
  "destino", "fontes", "revisao", "versao"
];
const CAMINHOS = ["ubs", "ps"];
const LINHAS = ["l1", "alt", "adj", "ci"];

function validarFicha(f, jaRegistradas = window.FICHAS) {
  const erros = [];
  for (const c of CAMPOS_OBRIGATORIOS) if (f[c] === undefined) erros.push(`falta o campo "${c}"`);
  if (f.caminho && !CAMINHOS.includes(f.caminho)) erros.push(`caminho deve ser ${CAMINHOS.join(" ou ")}`);
  if (f.especialidade && !ESPECIALIDADES[f.especialidade]) erros.push(`especialidade "${f.especialidade}" não existe em js/registro.js`);
  if (f.id && !/^[a-z0-9-]+$/.test(f.id)) erros.push("id deve ter só letras minúsculas, números e hífen");
  if (jaRegistradas.some(x => x.id === f.id)) erros.push(`id "${f.id}" repetido`);
  (f.tratamento || []).forEach((t, i) => {
    if (!LINHAS.includes(t.linha)) erros.push(`tratamento[${i}].linha deve ser ${LINHAS.join(", ")}`);
  });
  return erros;
}

function registrarFicha(f) {
  const erros = validarFicha(f);
  if (erros.length) {
    console.error(`Ficha "${f.id || f.titulo || "?"}" não carregada:\n- ` + erros.join("\n- "));
    return;
  }
  window.FICHAS.push(f);
}

if (typeof module !== "undefined") module.exports = { validarFicha, ESPECIALIDADES, CAMPOS_OBRIGATORIOS, LINHAS, CAMINHOS };
