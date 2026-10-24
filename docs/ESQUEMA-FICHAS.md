# Esquema das fichas

Cada ficha é um arquivo `fichas/<especialidade>/<id>.js` que chama `registrarFicha({...})`.
O nome do arquivo é igual ao `id`. Depois de criar ou mover fichas, rode:

```bash
node ferramentas/gerar-indice.js     # atualiza a lista no index.html
node ferramentas/validar.js          # confere tudo
```

Há três formatos:

- **completo**: condições graves ou complexas. Vista rápida + ficha completa em abas.
- **curto**: condições simples e referências. Uma página só: alarmes, conduta, prescrição e retorno.
- **procedimento**: só na pasta `fichas/procedimentos/`. Indicações, materiais, checagens, passo a passo, conferência e registro.

Exemplos: `fichas/endocrinologia/cetoacidose.js` (completo), `fichas/oftalmo-otorrino/hordeolo.js` (curto) e `fichas/procedimentos/sondagem-vesical.js` (procedimento).

---

## Campos comuns (os dois formatos)

| Campo | Tipo | Conteúdo |
|---|---|---|
| `id` | texto | minúsculas, números e hífen; vira o link `#id` |
| `especialidade` | texto | nome da pasta (lista em `js/registro.js`) |
| `caminho` | `"ubs"` ou `"ps"` | onde a ficha é usada principalmente |
| `publico` | `"adulto"`, `"pediatrico"` ou `"ambos"` | `ambos` exige doses de adulto **e** de criança (mg/kg com dose máxima) |
| `formato` | `"completo"` ou `"curto"` | omitido = completo |
| `titulo` | texto | nome da condição como o médico procura |
| `resumo` | texto | 1–2 frases: quando usar a ficha / definição clínica |
| `palavrasChave` | texto | sinônimos, siglas, nomes populares e drogas, sem acento |
| `critico` | `{ tempo, texto }` | opcional no curto. `tempo`: a ação ou meta que não pode atrasar, em até ~35 caracteres. `texto`: 1–2 frases |
| `alarmes` | lista de textos | sinais de gravidade / bandeiras vermelhas |
| `prescricao` | `{ ambulatorial?, hospitalar? }` | **texto pronto para copiar** (ver abaixo); pelo menos um dos dois |
| `orientacoesRetorno` | lista de textos | o que dizer ao paciente: cuidados, sinais para voltar imediatamente, quando retornar |
| `tabelas` | lista de `{ titulo, colunas, linhas, nota? }` | opcional: doses por peso, sinais vitais, escores, esquemas |
| `fontes` | lista de textos | diretriz, entidade, **ano**. Fontes oficiais primeiro (Ministério da Saúde, PCDT, SBP, FEBRASGO, SBC, SBD, AHA/ACLS/PALS, ATLS, GINA, GOLD, OMS) |
| `revisao` | `"AAAA-MM-DD"` | data da revisão |
| `versao` | texto | `"1.0"` na criação; aumente a cada mudança de conteúdo |

### Prescrição pronta (`prescricao`)

Texto com quebras de linha (`\n`), no padrão de receita brasileira, para o médico copiar e ajustar:

```
USO ORAL
1. Cefalexina 500 mg ---------------------------- 28 cápsulas
   Tomar 1 cápsula de 6 em 6 horas por 7 dias.
2. Dipirona 500 mg ------------------------------ 1 caixa
   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.

USO TÓPICO
3. ...
```

- **ambulatorial**: receita para casa (nome genérico, concentração, quantidade, posologia por extenso, duração).
- **hospitalar**: prescrição de internação/sala de emergência numerada: dieta, hidratação, medicações com **dose, via, diluição, velocidade de infusão e intervalo**, sintomáticos SN, profilaxias, cuidados e controles.
- Em fichas `ambos`, escreva o modelo de adulto e uma linha com a dose pediátrica por kg (ou um segundo bloco "Criança (por kg)").
- Use só medicamentos disponíveis no Brasil; prefira os da RENAME/SUS e cite alternativa quando a 1ª escolha não estiver no SUS.

## Formato completo

Campos obrigatórios além dos comuns:

- `critico`, `condutaInicial` (lista), `fataisExcluir` (lista), `proximaDecisao` (texto)
- `clinica`: `{ anamnese: [], exameFisico: [], diferenciais: [{ dx, pista }], gravidade: [] }`
- `exames`: `[{ nome, pedido, porQue, esperar, interpretacao, limitacoes }]`. `pedido` é o texto da solicitação, pronto para copiar
- `tratamento`: `[{ droga, linha, dose, via, intervalo, duracao, monitorizacao, contraindicacoes, ajustes }]`
  - `linha`: `"l1"` 1ª escolha · `"alt"` alternativa · `"adj"` adjuvante · `"ci"` não usar
  - `ajustes`: diluição, velocidade de infusão, ajuste renal/hepático, idade, gestação
- `destino`: `{ agora: [], reavaliar: [], alta: [], observacao: [], internacao: [], transferencia: [] }` (use `["—"]` quando não se aplica)

## Formato curto

Obrigatórios além dos comuns: `conduta` (lista, em ordem). Opcionais:

- `exames`: lista de textos (o que pedir e quando)
- `diferenciais`: lista de textos
- `tratamento`: mesma estrutura do formato completo, se ajudar
- `encaminhar`: lista de textos (quando e para onde encaminhar)
- `tabelas`

## Formato procedimento

`prescricao` é opcional. Obrigatórios além dos comuns (`alarmes` = quando interromper / chamar ajuda):

- `indicacoes`, `contraindicacoes`, `materiais` (cada item vira uma caixa de marcar), `checagemAntes` (conferências antes de começar: identificação, consentimento, alergias, coagulação, time-out...), `conferirDepois`, `complicacoes` (complicação + como agir): listas de textos
- `passos`: `[{ etapa: "Preparo", itens: ["...", "..."] }, ...]`, em ordem; a numeração é contínua entre etapas
- `documentacao`: texto pronto para copiar no prontuário, com campos `[ ]` para preencher
- Opcionais: `critico`, `tabelas`, `relacionadas` (lista de ids de fichas)

## Regras de conteúdo

1. **Atualização**: use a versão mais recente da diretriz oficial. Cite o ano em `fontes`. Se houver conflito, siga o Ministério da Saúde / PCDT para o SUS e mencione a diferença.
2. **Doses**: sempre dose, via, intervalo e duração; pediatria em mg/kg com dose máxima; concentrações das apresentações brasileiras quando calcular volume.
3. **Sem invenção**: se não houver certeza sobre um número, não o escreva. Descreva o critério qualitativo e cite a fonte para consulta.
4. **Linguagem**: português do Brasil, frases curtas, termos médicos usuais, sem emojis.
5. **Segurança**: contraindicações e interações relevantes, gestação e lactação, ajuste renal; notificação compulsória quando aplicável.
