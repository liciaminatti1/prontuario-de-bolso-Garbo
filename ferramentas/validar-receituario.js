// Testes do receituário (leitura de prescrição, quantidade, extenso, separação por tipo, avisos).
// Uso: node ferramentas/validar-receituario.js
const fs = require("fs");
const path = require("path");
const raiz = path.join(__dirname, "..");
global.window = {};
Object.assign(global, require(path.join(raiz, "js/medicamentos.js")));
for (const a of fs.readdirSync(path.join(raiz, "js/medicamentos")).filter(a => a.endsWith(".js"))) require(path.join(raiz, "js/medicamentos", a));
const r = require(path.join(raiz, "js/receituario/dados.js"));
let falhas = 0, total = 0;
const ok = (c, n, x = "") => { total++; if (!c) { falhas++; console.log(`✗ ${n}${x ? " — " + x : ""}`); } };

ok(r.rxExtenso(21, true) === "vinte e uma", "21 feminino");
ok(r.rxExtenso(42) === "quarenta e dois", "42");
ok(r.rxExtenso(100) === "cem" && r.rxExtenso(120) === "cento e vinte", "cem/cento");
ok(r.rxExtenso(2001, true) === "dois mil e uma", "milhar no masculino", r.rxExtenso(2001, true));
ok(r.rxQuantidadeTexto({ qtd: "21", unidade: "cápsulas" }, true) === "21 (vinte e uma) cápsulas", "quantidade por extenso");
ok(r.rxQuantidadeTexto({ qtd: "1", unidade: "frascos" }, true) === "1 (um) frasco", "singular");

const casos = [["Tomar 1 cápsula de 8 em 8 horas por 7 dias.", "cápsulas", 21], ["Tomar 2 comprimidos de 12/12h por 5 dias", "comprimidos", 20],
  ["Tomar 1 comprimido 1 vez ao dia por 3 dias", "comprimidos", 3], ["Tomar 1 comprimido à noite por 2 semanas", "comprimidos", 14],
  ["Tomar 4 comprimidos em dose única", "comprimidos", 4], ["Tomar meio comprimido 2 vezes ao dia por 10 dias", "comprimidos", 10],
  ["Dar 5 mL de 8/8h por 7 dias", "frascos", null]];
for (const [pos, un, esp] of casos) ok(r.rxCalcularQuantidade({ posologia: pos, unidade: un }) === esp, `quantidade: ${pos}`, String(r.rxCalcularQuantidade({ posologia: pos, unidade: un })));

const itens = r.rxLerPrescricao(`ALTA — QUADRO X
USO ORAL
1. Amoxicilina 500 mg ------------------------ 21 cápsulas
   Tomar 1 cápsula de 8 em 8 horas por 7 dias.
2. Clonazepam 2 mg
   Tomar 1 comprimido à noite por 30 dias.
   (Reavaliar em 30 dias.)
USO TÓPICO
3. Mupirocina 2% pomada --- 1 bisnaga
   Aplicar nas lesões 3 vezes ao dia por 7 dias.`);
ok(itens.length === 3, "3 itens (título de seção ignorado)", itens.map(i => i.nome).join(" | "));
ok(itens[0].qtd === "21" && itens[0].unidade === "cápsulas" && itens[0].medId === "amoxicilina", "item 1");
ok(itens[1].qtd === "30" && itens[1].nota === "Reavaliar em 30 dias." && itens[1].dias === "30", "item 2: quantidade calculada e nota separada");
ok(itens[2].via === "USO TÓPICO" && itens[2].unidade === "bisnagas", "item 3: via tópica");
const docs = r.rxDocumentos(itens, "auto").map(d => d.tipo + (d.antimicrobiano ? "+atm" : ""));
ok(docs.join(",") === "simples,especial+atm,azul", "separação automática por tipo", docs.join(","));
ok(r.rxDocumentos([...itens, { nome: "Morfina 10 mg", medId: "morfina" }, { nome: "Morfina 30 mg", medId: "morfina" }], "amarela").length === 5, "notificação A: um por documento");
const av = r.rxAvisos({ itens, tipo: "simples", paciente: "" }).map(a => a.t).join(" | ");
ok(/nome completo/.test(av) && /exige/.test(av), "avisos: paciente e tipo insuficiente", av);
const avd = r.rxAvisos({ itens, tipo: "digital", paciente: "X", endereco: "Rua", idade: "30", sexo: "F" }).map(a => a.t).join(" | ");
ok(/notificações A e B não são válidas/.test(avd), "digital não serve para notificação B");
ok(r.rxAvisos({ itens: [r.rxNovoItem({ nome: "Radiografia de ___ em AP" })], tipo: "exames" }).some(a => /Complete/.test(a.t)), "exames: lacuna");
const ex = r.rxLerPrescricao("USO ORAL\n1. Clonazepam 2 mg ---------- 30 (trinta) comprimidos\n   Tomar 1 comprimido à noite por 30 dias.");
ok(ex[0].qtd === "30" && ex[0].unidade === "comprimidos", "modelo com extenso: lê só número e unidade", JSON.stringify(ex[0]));
ok(r.rxQuantidadeTexto(ex[0], true) === "30 (trinta) comprimidos", "extenso não duplica", r.rxQuantidadeTexto(ex[0], true));
ok(r.rxQuantidadeTexto({ qtd: "30 (trinta)", unidade: "comprimidos" }, true) === "30 (trinta) comprimidos", "extenso digitado na quantidade não duplica");
ok(r.rxQuantidadeTexto({ qtd: "20", unidade: "(vinte) comprimidos" }, true) === "20 (vinte) comprimidos", "extenso na unidade não duplica");
const livre = r.rxLerPrescricao("AMOXICILINA 500MG\nTOMAR 1 CAPSULA DE 8/8H POR 7 DIAS\nColírio Xyz 5 mL - 1 frasco\nPingar 1 gota no olho direito de 4/4h por 7 dias\nLacrimal Abc colírio\nPingar 1 gota 4 vezes ao dia\nOrientações: retorno em 7 dias");
ok(livre.length === 3 && livre[0].qtd === "21" && livre[2].nome === "Lacrimal Abc colírio", "texto livre (maiúsculas, sem número, fora da base)", JSON.stringify(livre.map(i => i.nome)));
ok(livre.orientacoes === "retorno em 7 dias", "orientações separadas");
ok(livre[1].via === "USO OFTÁLMICO" && livre[0].via === "USO ORAL", "via deduzida (colírio → oftálmico)", livre.map(i => i.via).join(","));
ok(r.rxViaSugerida("Cetoconazol 2% creme", "") === "USO TÓPICO" && r.rxViaSugerida("Ciprofloxacino otológico", "") === "USO OTOLÓGICO" && r.rxViaSugerida("Miconazol creme vaginal", "") === "USO VAGINAL", "vias tópica/otológica/vaginal");
console.log(`Receituário: ${total - falhas}/${total}`);
process.exit(falhas ? 1 : 0);
