/* Exames — base compartilhada (carregar antes dos arquivos de conteúdo). Contrato em docs/EXAMES.md. */
const EXAMES_LAB = [];
const EXAMES_IMAGEM = [];
const EX_CATEGORIAS_LAB = {
  hemograma: "Hemograma", coagulacao: "Coagulação", ferro: "Ferro e vitaminas", inflamatorio: "Inflamação e infecção",
  gasometria: "Gasometria e lactato", urina: "Urina", liquor: "Líquor", eletrolitos: "Eletrólitos", renal: "Função renal",
  hepatico: "Fígado, pâncreas e bilirrubinas", glicemia: "Glicemia e diabetes", lipidios: "Lípides", cardiaco: "Marcadores cardíacos",
  endocrino: "Hormônios", sorologia: "Sorologias e testes rápidos", outros: "Outros"
};
const EX_CATEGORIAS_IMAGEM = {
  rx: "Radiografia", usg: "Ultrassonografia", tc: "Tomografia", rm: "Ressonância", cardio: "ECG e ecocardiograma",
  endoscopia: "Endoscopia", outros: "Outros"
};
if (typeof module !== "undefined") module.exports = { EXAMES_LAB, EXAMES_IMAGEM, EX_CATEGORIAS_LAB, EX_CATEGORIAS_IMAGEM };
