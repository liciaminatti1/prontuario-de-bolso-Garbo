/* Registro central das fichas.
   Cada arquivo em fichas/ chama registrarFicha({...}). Aqui os campos obrigatórios
   são conferidos; uma ficha incompleta aparece no console e não é carregada. */
window.FICHAS = [];

const CAMPOS_OBRIGATORIOS = [
  "id", "caminho", "titulo", "resumo", "critico", "alarmes", "condutaInicial",
  "fataisExcluir", "proximaDecisao", "clinica", "exames", "tratamento",
  "destino", "fontes", "revisao", "versao"
];
const CAMINHOS = ["ubs", "ps"];
const LINHAS = ["l1", "alt", "adj", "ci"];

function validarFicha(f) {
  const erros = [];
  for (const c of CAMPOS_OBRIGATORIOS) if (f[c] === undefined) erros.push(`falta o campo "${c}"`);
  if (f.caminho && !CAMINHOS.includes(f.caminho)) erros.push(`caminho deve ser ${CAMINHOS.join(" ou ")}`);
  if (f.id && !/^[a-z0-9-]+$/.test(f.id)) erros.push("id deve ter só letras minúsculas, números e hífen");
  if (window.FICHAS.some(x => x.id === f.id)) erros.push(`id "${f.id}" repetido`);
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

if (typeof module !== "undefined") module.exports = { validarFicha, CAMPOS_OBRIGATORIOS, LINHAS, CAMINHOS };
