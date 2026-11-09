# Esquema da base de medicamentos

A página **Medicamentos** lista os remédios por classe (função), com o modelo de prescrição pronto
para copiar, o tipo de receituário e os alertas de segurança (gestação, rim, alergia, interações).

- `js/medicamentos.js`: base original (73 itens), `CLASSES_MED`, `RECEITAS`, `ALERGIAS`, `INTERACOES`.
- `js/medicamentos/*.js`: um arquivo por grupo de classes. Cada um chama:
  - `complementarMedicamentos({ id: { receita, prescrever, usos } })` para acrescentar campos aos itens da base;
  - `adicionarMedicamentos([ {...}, ... ])` para remédios novos (item completo).

Depois de editar, rode `node ferramentas/validar-medicamentos.js` (tem de terminar com 0 erros).

## Campos de um item

| Campo | Obrigatório | Conteúdo |
|---|---|---|
| `id` | sim | minúsculas, números e hífen; único |
| `nomes` | sim | nome genérico principal + sinônimos (reconhecem o remédio no texto das fichas). Nomes curtos e sem dose |
| `classe` | sim | uma das chaves de `CLASSES_MED` |
| `receita` | sim | `simples`, `antimicrobiano`, `C1`, `B1`, `A` ou `hospitalar` (uso exclusivo hospitalar) |
| `prescrever` | sim | lista de `{ contexto, texto }`: modelos prontos para copiar (ver abaixo) |
| `usos` | recomendado | principais indicações em uma linha |
| `tags` | sim (pode ser `[]`) | reaproveite as tags das regras de `INTERACOES` (ex.: `isrs`, `benzo`, `opioide`, `qt`, `iecabra`, `diuretico`, `aine`, `quinolona`, `macrolideo`, `azol`, `indutor`, `cyp3a4-inib`, `serotoninergico`, `sedativo`, `anticolinergico`, `betalactamico`, `penicilina`, `cefalosporina`, `sulfonamida`, `poupador-k`, `hipercalemia`, `estatina`, `estatina-3a4`, `anticoagulante`, `antiagregante`, `corticoide`, `beta2`, `convulsivante`, `antidopaminergico`) |
| `adulto` | sim | dose habitual do adulto (texto curto, com via e intervalo) |
| `ped` | opcional | dose por peso para a calculadora: `{ dose, faixa, intervalo, maxDose, maxDia, porDia?, divisoes?, idadeMin? }` (mg; ver itens da base) |
| `apres` | opcional | apresentações brasileiras: `{ rotulo, mgPorMl?, mgPorGota?, mgPorComp? }` |
| `renal` | opcional | `[{ abaixo: ClCr, texto }]` em ordem crescente de ClCr |
| `gestacao` | sim | `{ nivel: "compativel" \| "cautela" \| "evitar" \| "contraindicado", texto }` |
| `alergia` | sim (pode ser `[]`) | ids de `ALERGIAS`: penicilinas, cefalosporinas, sulfonamidas, aine, dipirona, macrolideos, quinolonas, opioides |
| `contra` | sim (pode ser `[]`) | contraindicações e cuidados principais |

## Modelos de prescrição (`prescrever`)

Padrão de receita brasileira, com `\n` para quebrar linha, nome genérico, concentração, quantidade
total e posologia por extenso:

```js
prescrever: [
  { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Amoxicilina 500 mg ------------------------ 21 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas por 7 dias." },
  { contexto: "Criança — ambulatorial (50 mg/kg/dia)", texto: "USO ORAL\n1. Amoxicilina suspensão 250 mg/5 mL ---------- 1 frasco\n   Dar ___ mL de 8 em 8 horas por 10 dias.\n   (50 mg/kg/dia ÷ 3; máximo 500 mg por dose)" },
  { contexto: "Hospitalar / PS", texto: "Ampicilina 1 g + SF 0,9% 100 mL IV em 30 min de 6/6h" }
]
```

- Um modelo para cada uso relevante (adulto, criança, IV/hospitalar, esquemas diferentes por indicação).
- Pediatria: deixe o volume em `___ mL` e escreva a regra (mg/kg/dia, divisões, máximo); a calculadora faz a conta.
- Hospitalar: dose, diluição, volume, tempo de infusão e intervalo.
- Controlados: o modelo segue o receituário correto (`C1`, `B1`, `A`) e a quantidade por extenso entre parênteses, ex.: `30 (trinta) comprimidos`.
- Sem invenção: se não tiver certeza de um número, não escreva; prefira RENAME/SUS e apresentações existentes no Brasil.
