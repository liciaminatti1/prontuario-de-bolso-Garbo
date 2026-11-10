# Módulo Vaga Zero — transporte inter-hospitalar

Aba independente (`#vagazero`) de apoio à decisão para preparar, conduzir e entregar uma transferência
inter-hospitalar de urgência. **Não autoriza transporte**: organiza dados, aponta riscos e lacunas, e
deixa explícito o que depende do médico responsável.

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `js/vagazero/conteudo-complicacoes-*.js` | Biblioteca de intercorrências (`VZ_COMPLICACOES.push(...)`) |
| `js/vagazero/conteudo-farmacos-*.js` | Biblioteca farmacológica de transporte (`VZ_FARMACOS.push(...)`) |
| `js/vagazero/conteudo-guias.js` | Via aérea, O₂/ventilação, pediatria/neonatal, gestante, contingências universais (`VZ_GUIAS`) |
| `js/vagazero/calc.js` | Cálculos puros: dose/diluição/mL/h, O₂, tubo, peso predito, sinais vitais por idade |
| `js/vagazero/motor.js` | Regras: gatilhos do caso, ABCDE, risco, dados ausentes, inconsistências, complicações, contingência, checklist, SBAR |
| `js/vagazero/extracao.js` | Leitura local de PDF (pdf.js) e foto (Tesseract OCR) + reconhecimento de campos |
| `js/vagazero/ui.js` | Telas e abas |
| `vendor/` | pdf.js e Tesseract (cópia local; nada é enviado a servidores) |
| `ferramentas/validar-vagazero.js` | Valida o conteúdo e roda os testes dos cálculos e do motor |

`js/vagazero/base.js` é carregado primeiro e declara `const VZ_COMPLICACOES = []`, `const VZ_FARMACOS = []`, `let VZ_GUIAS = {}`.

## Vocabulário de gatilhos (calculados pelo motor a partir do caso)

**Fisiologia (ajustada à idade):** `spo2-baixa` (< 92%; neonato < 90%), `spo2-critica` (< 85%), `fr-alta`, `fr-baixa`,
`fc-alta`, `fc-muito-alta` (adulto > 150), `fc-baixa`, `hipotensao`, `pa-muito-alta` (adulto PAS ≥ 180 ou PAD ≥ 120),
`perfusao-ruim`, `glasgow-baixo` (≤ 13), `glasgow-critico` (≤ 8), `glicemia-baixa`, `glicemia-alta` (> 250),
`hipotermia` (< 35 °C), `febre` (≥ 38 °C), `hiperpirexia` (≥ 40 °C), `dor-intensa` (≥ 7/10), `vomitos`.

**Suporte em uso:** `o2`, `vni`, `vm` (intubado/ventilação mecânica), `via-aerea-avancada`, `dva` (droga vasoativa),
`sedacao-continua`, `insulina-iv`, `sem-acesso`, `acesso-unico`, `sonda-vesical`.

**Perfil:** `neonato` (< 28 dias), `pediatrico` (28 dias a < 18 anos), `adulto`, `idoso` (≥ 65), `gestante`, `puerpera`, `obeso` (IMC ≥ 35), `prematuro`.

**Comorbidades/uso** (texto das comorbidades e medicações): `comorb:dpoc`, `comorb:asma`, `comorb:ic`, `comorb:dac`, `comorb:dm`,
`comorb:drc`, `comorb:epilepsia`, `comorb:hepatopatia`, `comorb:has`, `comorb:fa`, `comorb:avc`, `uso:anticoagulante`,
`uso:insulina`, `uso:betabloqueador`, `uso:opioide`, `uso:antiagregante`.

**Diagnóstico** (texto do diagnóstico/motivo): `dx:sca`, `dx:avc-isquemico`, `dx:avc-hemorragico`, `dx:hsa`, `dx:tce`,
`dx:trauma`, `dx:trauma-torax`, `dx:queimadura`, `dx:sepse`, `dx:choque`, `dx:pneumonia`, `dx:asma`, `dx:dpoc`,
`dx:bronquiolite`, `dx:insuf-resp`, `dx:eap`, `dx:ic`, `dx:tep`, `dx:dissecao-aorta`, `dx:arritmia`, `dx:bradiarritmia`,
`dx:taquiarritmia`, `dx:convulsao`, `dx:hic`, `dx:rebaixamento`, `dx:cad`, `dx:hipoglicemia`, `dx:crise-hipertensiva`,
`dx:pre-eclampsia`, `dx:eclampsia`, `dx:hellp`, `dx:hemorragia-obstetrica`, `dx:trabalho-parto`, `dx:tpp`, `dx:rpm`,
`dx:sofrimento-fetal`, `dx:hemorragia-digestiva`, `dx:sangramento`, `dx:anafilaxia`, `dx:intoxicacao`, `dx:meningite`,
`dx:pos-pcr`, `dx:abdome-agudo`, `dx:hipercalemia`, `dx:disturbio-eletrolitico`, `dx:prematuro`, `dx:cardiopatia-congenita`,
`dx:neonatal-grave`, `dx:pancreatite`, `dx:insuf-renal`.

## Complicação (`VZ_COMPLICACOES.push({...})`)

```js
{
  id: "hipoxemia",                       // único, minúsculas e hífen
  titulo: "Hipoxemia",
  grupo: "respiratoria",                 // respiratoria | cardiovascular | neurologica | metabolica | obstetrica | neonatal
  publico: ["adulto", "pediatrico", "neonato"], // perfis em que se aplica (gestante entra como adulto + gatilho gestante)
  gatilhos: { "spo2-baixa": 3, "dx:pneumonia": 2, "vm": 1 },   // peso 1–3; o motor soma e mostra a justificativa
  porQue: "Mecanismo do risco em 1–2 frases (o motor acrescenta os dados do caso).",
  sinaisAlerta: ["..."], monitorar: ["..."], reconhecer: ["..."],
  conduta: ["passo 1", "passo 2"],       // conduta imediata, em ordem
  medicamentos: [{
    farmaco: "salbutamol",               // id de VZ_FARMACOS (ou null se não estiver na biblioteca)
    nome: "Salbutamol",
    indicacao: "broncoespasmo",
    adulto: "...", pediatrico: "... mg/kg (máx ...)", neonatal: "" ,   // "" quando não se aplica; NUNCA dose de adulto para criança
    diluicao: "...", via: "...", velocidade: "...", repeticao: "..."
  }],
  alternativas: ["..."], procedimentos: ["..."],
  parar: ["quando fazer parada segura / pedir apoio / desviar para hospital mais próximo"],
  contingencia: { se: "Se a SpO₂ cair abaixo de 90%", faca: ["ação curta", "ação curta"] },
  fontes: ["Instituição — documento (ano)"]
}
```

## Fármaco (`VZ_FARMACOS.push({...})`)

```js
{
  id: "adrenalina", nome: "Adrenalina (epinefrina)",
  categorias: ["pcr", "anafilaxia", "vasoativa", "broncoespasmo"],
  altoRisco: true,                       // exige dupla checagem na calculadora
  apresentacoes: [{ rotulo: "Ampola 1 mg/mL (1 mL)", conc: 1, unidade: "mg/mL", volume: 1 }],
  indicacoes: [{
    id: "pcr-adulto", rotulo: "PCR — adulto", faixa: "adulto",   // adulto | pediatrico | neonatal | todas
    modo: "bolus",                       // bolus | infusao
    dose: { min: 1, max: 1, unidade: "mg" },
    doseMax: { valor: 1, unidade: "mg" }, // por dose (bolus) ou taxa máxima (infusão); null se não houver
    diluicao: "Sem diluição; seguir com 20 mL de SF e elevar o membro",
    diluicaoPadrao: null,                // infusão: { quantidade: 4, unidade: "mg", volumeFinal: 250 }
    via: "IV/IO", velocidade: "Bolus rápido", repeticao: "A cada 3–5 min",
    observacoes: "..."
  }],
  contraindicacoes: [], cuidados: [], adversos: [], monitorizacao: [], fontes: []
}
```

Unidades de `dose`: `mg`, `mcg`, `g`, `UI`, `mEq`, `mL`, `mg/kg`, `mcg/kg`, `g/kg`, `UI/kg`, `mEq/kg`, `mL/kg`
(bolus) e `mcg/kg/min`, `mcg/min`, `mg/min`, `mg/kg/h`, `mcg/kg/h`, `mg/h`, `g/h`, `UI/kg/h`, `UI/h`, `mL/h`, `mL/kg/h` (infusão).
Unidades de concentração: `mg/mL`, `mcg/mL`, `g/mL`, `UI/mL`, `mEq/mL` (porcentagem convertida: 50% = 500 mg/mL).

Ids fixos da biblioteca de fármacos (as complicações referenciam estes):
`adrenalina, noradrenalina, dopamina, dobutamina, vasopressina, atropina, amiodarona, adenosina, lidocaina, metoprolol,
midazolam, diazepam, cetamina, etomidato, propofol, succinilcolina, rocuronio, fentanil, morfina, dipirona, ondansetrona,
fenitoina, fenobarbital, levetiracetam, sulfato-magnesio, hidrocortisona, metilprednisolona, dexametasona, salbutamol,
ipratropio, furosemida, nitroglicerina, nitroprussiato, hidralazina, glicose, gluconato-calcio, bicarbonato-sodio,
insulina-regular, naloxona, flumazenil, acido-tranexamico, ocitocina, manitol, salina-hipertonica, cristaloide, alprostadil`.

## Guias (`VZ_GUIAS`)

```js
VZ_GUIAS = {
  viaAerea: { adulto: [secao], pediatrico: [secao], neonatal: [secao] },
  oxigenio: [secao], ventilacao: [secao], pediatrico: [secao], neonatal: [secao], gestante: [secao],
  contingenciaUniversal: [{ id, se, faca: ["..."], farmacos: ["id"] }]
}
// secao = { titulo, itens?: ["..."], tabela?: { colunas: [], linhas: [[]] }, nota?: "" }
```

## Regras clínicas do módulo

1. Não inventar dados nem presumir peso, idade, diagnóstico ou sinais vitais; o que falta aparece como "não informado".
2. Diferenciar a origem: **informado** (digitado) e **do documento** (preenchido automaticamente; amarelo = conferir/conflito). O preenchimento automático nunca sobrescreve valor digitado; em conflito, sinais vitais usam o registro mais recente e os demais campos o primeiro registro, com as alternativas visíveis.
3. Doses só com peso (quando por kg), faixa etária compatível e concentração confirmada no rótulo.
4. Alto risco: conferência independente antes de administrar.
5. Classificação de risco é apoio; o texto da tela diz sempre que não autoriza o transporte.
6. Referências reais com instituição e ano; quando não houver protocolo validado, dizer isso.
