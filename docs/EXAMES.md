# Aba Exames — contrato dos dados

Rota `#exames`. Arquivos:

| Arquivo | Conteúdo |
|---|---|
| `js/exames/base.js` | `EXAMES_LAB`, `EXAMES_IMAGEM`, categorias |
| `js/exames/lab-hemato.js` | Hemograma, coagulação, ferro/vitaminas, inflamatórios, gasometria, urina, líquor (`EXAMES_LAB.push(...)`) |
| `js/exames/lab-bioquimica.js` | Eletrólitos, renal, hepático, glicemia, lípides, cardíacos, hormônios, sorologias, outros |
| `js/exames/imagem.js` | Exames de imagem, ECG e endoscopias (`EXAMES_IMAGEM.push(...)`) |
| `js/exames/motor.js` | Leitura de resultados (texto de laudo), comparação com referência, padrões entre exames, achados de laudo de imagem |
| `js/exames/ui.js` | Tela |
| `ferramentas/validar-exames.js` | Validação e testes |

## Exame laboratorial

```js
EXAMES_LAB.push({
  id: "potassio",                       // único, minúsculas e hífen
  nome: "Potássio",
  sinonimos: ["potassio", "k", "k+", "potassio serico"],   // como aparece em laudos (sem acento, minúsculo); usados para LER o laudo
  categoria: "eletrolitos",             // chave de EX_CATEGORIAS_LAB
  tipo: "quantitativo",                 // quantitativo | qualitativo
  unidade: "mEq/L",                     // unidade padrão do sistema
  conversoes: [{ unidade: "mmol/L", fator: 1 }],   // valor_na_unidade × fator = valor na unidade padrão (opcional)
  ref: [                                // intervalos de referência; o mais específico vence (faixa > sexo > gestante)
    { faixa: "adulto", min: 3.5, max: 5.0 },
    { faixa: "crianca", min: 3.5, max: 5.5 },        // faixa: adulto | crianca | rn | todas
    { faixa: "adulto", sexo: "F", min: ..., max: ... },  // quando difere por sexo
    { faixa: "adulto", gestante: true, min: ..., max: ... }
  ],
  critico: { min: 2.5, max: 6.5 },      // valores de pânico (adulto), opcional
  indicacoes: ["quando pedir..."],
  preparo: "Sem preparo",               // jejum, horário etc.
  pedido: "Dosagem de potássio sérico", // como escrever na solicitação
  alto: { causas: ["..."], fichas: ["hipercalemia", "lesao-renal-aguda"] },   // fichas = ids existentes
  baixo: { causas: ["..."], fichas: ["hipocalemia"] },
  notas: "Hemólise da amostra eleva falsamente.",
  fontes: ["SBPC/ML ...", "..."]
});
```

Qualitativo (sorologia, teste rápido, urocultura): `tipo: "qualitativo"`, sem `ref`; use `positivo: { causas, fichas, conduta }` e `negativo: { texto }` (janela imunológica etc.). Sinônimos devem permitir achar "reagente"/"não reagente" na mesma linha.

## Exame de imagem / gráfico / endoscópico

```js
EXAMES_IMAGEM.push({
  id: "tc-cranio",
  nome: "Tomografia de crânio",
  categoria: "tc",                       // chave de EX_CATEGORIAS_IMAGEM
  variantes: ["sem contraste", "com contraste"],
  indicacoes: ["TCE com critérios (Canadian CT Head Rule)", "..."],
  naoIndicado: ["Cefaleia primária sem sinal de alarme", "..."],
  cuidados: ["Contraste iodado: função renal, alergia, metformina", "Gestação: ..."],
  preparo: "...",
  pedido: "Tomografia computadorizada de crânio sem contraste. HD: ___. Justificativa: ___.",
  exemplos: ["TC de crânio sem contraste — HD: TCE leve com perda de consciência e vômitos (Canadian CT Head Rule positiva)."],
  achados: [                             // termos que aparecem em LAUDOS (sem acento, minúsculo)
    { termos: ["hematoma subdural", "hsd"], significado: "Sangue entre dura e aracnoide", fichas: ["tce-moderado-grave"], urgente: true },
    { termos: ["desvio da linha media"], significado: "Efeito de massa", fichas: ["hipertensao-intracraniana"], urgente: true }
  ],
  fontes: ["CBR — Critérios de adequação ...", "ACR Appropriateness Criteria (ano)"]
});
```

## Regras de conteúdo

1. Valores de referência adultos usuais no Brasil (SBPC/ML, livros-texto, bulas dos kits); pediatria e RN quando diferirem. Sempre lembrar no texto que **vale o intervalo do laudo do laboratório**. Sem invenção: se não tiver certeza de um intervalo, não escreva o número.
2. `fichas`: só ids que existem (conferido por `ferramentas/validar-exames.js`).
3. `pedido` e `exemplos`: português do Brasil, como se escreve na guia SUS/convênio (nome do exame, região, com/sem contraste, HD/justificativa, CID quando útil).
4. `sinonimos` e `termos`: sem acento e em minúsculas, incluindo abreviações comuns de laudo (Hb, Ht, VCM, TGO/AST, TGP/ALT, GGT, FA, PCR, VHS, TSH, T4L, Cr, Ur, Na, K…).
