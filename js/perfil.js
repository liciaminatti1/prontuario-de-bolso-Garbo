/* Estado compartilhado do app: perfil do(a) médico(a), favoritos, histórico e o
   paciente em atendimento.
   - Perfil, favoritos e histórico ficam guardados neste navegador (localStorage).
   - Os dados do paciente ficam SÓ na memória: somem ao recarregar ou fechar a página. */

const PERFIL_PADRAO = {
  tratamento: "Dra.",
  nome: "Licia Minatti",
  crm: "CRM-MS 16.871",
  rqe: "",
  servico: "",
  cidade: ""
};

function lerJSON(chave, padrao) {
  try { const v = JSON.parse(localStorage.getItem(chave)); return v ?? padrao; } catch (e) { return padrao; }
}
function gravarJSON(chave, valor) { try { localStorage.setItem(chave, JSON.stringify(valor)); } catch (e) {} }

const Perfil = {
  ler() { return { ...PERFIL_PADRAO, ...lerJSON("pb-perfil", {}) }; },
  salvar(p) { gravarJSON("pb-perfil", p); },
  nomeCompleto() { const p = this.ler(); return `${p.tratamento ? p.tratamento + " " : ""}${p.nome}`.trim(); },
  primeiroNome() { const p = this.ler(); return `${p.tratamento ? p.tratamento + " " : ""}${(p.nome || "").split(" ")[0]}`.trim(); }
};

const Favoritos = {
  lista() { return lerJSON("pb-favoritos", []); },
  tem(id) { return this.lista().includes(id); },
  alternar(id) {
    const l = this.lista();
    const i = l.indexOf(id);
    if (i >= 0) l.splice(i, 1); else l.unshift(id);
    gravarJSON("pb-favoritos", l);
    return i < 0;
  }
};

const Historico = {
  lista() { return lerJSON("pb-historico", []); },
  registrar(id) {
    const l = this.lista().filter(x => x.id !== id);
    l.unshift({ id, t: Date.now() });
    gravarJSON("pb-historico", l.slice(0, 60));
  },
  limpar() { gravarJSON("pb-historico", []); }
};

/* ---------- paciente em atendimento (memória apenas) ---------- */
const PACIENTE = {
  peso: "", idade: "", idadeUnidade: "anos", sexo: "", altura: "", creatinina: "",
  gestante: false, alergias: [], medicacoes: [], vinculo: ""
};
const ouvintesPaciente = new Set();
function atualizarPaciente(mudancas) {
  Object.assign(PACIENTE, mudancas);
  ouvintesPaciente.forEach(fn => { try { fn(PACIENTE); } catch (e) { console.error(e); } });
}
function limparPaciente() {
  atualizarPaciente({ peso: "", idade: "", idadeUnidade: "anos", sexo: "", altura: "", creatinina: "", gestante: false, alergias: [], medicacoes: [], vinculo: "" });
}

const num = v => { const n = parseFloat(String(v).replace(",", ".")); return isFinite(n) ? n : null; };
function idadeEmAnos(p = PACIENTE) {
  const i = num(p.idade);
  if (i === null) return null;
  return p.idadeUnidade === "meses" ? i / 12 : i;
}

/* ---------- função renal ---------- */
const Renal = {
  /* Cockcroft-Gault (mL/min). Peso real; em obesos considere peso ajustado. */
  cockcroft(idade, peso, cr, sexo) {
    if (!idade || !peso || !cr) return null;
    return ((140 - idade) * peso) / (72 * cr) * (sexo === "F" ? 0.85 : 1);
  },
  /* CKD-EPI 2021 sem raça (mL/min/1,73 m²). */
  ckdEpi2021(idade, cr, sexo) {
    if (!idade || !cr || !sexo) return null;
    const f = sexo === "F", k = f ? 0.7 : 0.9, a = f ? -0.241 : -0.302;
    return 142 * Math.pow(Math.min(cr / k, 1), a) * Math.pow(Math.max(cr / k, 1), -1.2) * Math.pow(0.9938, idade) * (f ? 1.012 : 1);
  },
  /* Schwartz à beira-leito (< 18 anos), mL/min/1,73 m². */
  schwartz(alturaCm, cr) {
    if (!alturaCm || !cr) return null;
    return 0.413 * alturaCm / cr;
  },
  estagio(tfg) {
    if (tfg === null) return null;
    if (tfg >= 90) return "G1 (≥ 90)";
    if (tfg >= 60) return "G2 (60–89)";
    if (tfg >= 45) return "G3a (45–59)";
    if (tfg >= 30) return "G3b (30–44)";
    if (tfg >= 15) return "G4 (15–29)";
    return "G5 (< 15)";
  },
  /* Valor usado para ajuste de dose: Cockcroft-Gault no adulto, Schwartz na criança. */
  doPaciente(p = PACIENTE) {
    const idade = idadeEmAnos(p), cr = num(p.creatinina), peso = num(p.peso), alt = num(p.altura);
    if (!cr) return null;
    if (idade !== null && idade < 18) {
      const v = this.schwartz(alt, cr);
      return v === null ? null : { valor: v, metodo: "Schwartz (mL/min/1,73 m²)" };
    }
    const v = this.cockcroft(idade, peso, cr, p.sexo);
    return v === null ? null : { valor: v, metodo: "Cockcroft-Gault (mL/min)" };
  }
};

if (typeof module !== "undefined") module.exports = { Renal, PERFIL_PADRAO };
