# Prontuário de Bolso

Sistema web de raciocínio clínico rápido para **UBS / Atenção Primária** e **Pronto-Socorro / Emergência**.
Funciona no celular e no computador, pode ser instalado na tela inicial e continua funcionando sem internet depois do primeiro acesso.

Cada ficha tem duas experiências:

- **Vista rápida:** meta de tempo crítica, sinais de alarme, primeira conduta, diagnósticos fatais a excluir, doses de 1ª linha e próxima decisão.
- **Ficha completa** em abas: Clínica · Exames (com texto do pedido para copiar) · Tratamento · Conduta e destino · Fontes, revisão e versão.

> ⚠️ Material de apoio para profissionais de saúde. Não substitui julgamento clínico nem protocolos institucionais.
> Todo o conteúdo (doses, diluições, contraindicações) deve ser revisado por médico responsável antes do uso assistencial.

---

## Estrutura

```
prontuario-de-bolso/
├── index.html              Página única; carrega o registro, as fichas e o app
├── css/estilo.css          Visual (tema claro e escuro, layout de celular)
├── js/registro.js          Lista de especialidades, registrarFicha() e validação
├── js/app.js               Interface: lista, vista rápida, ficha completa, busca
├── fichas/
│   ├── _modelo.js          Modelo comentado para criar uma ficha nova
│   ├── cardiologia/        Uma pasta por especialidade, uma ficha por arquivo
│   ├── pneumologia/
│   ├── neurologia/
│   └── ...                 (11 especialidades — ver tabela abaixo)
├── ferramentas/
│   ├── gerar-indice.js     Atualiza a lista de fichas no index.html
│   └── validar.js          Confere as fichas antes de publicar (Node.js)
├── sw.js                   Service worker (uso offline)
├── manifest.webmanifest    Instalação como app (PWA)
└── icons/                  Ícones do app
```

Não há etapa de build nem dependências. São arquivos estáticos: qualquer hospedagem de site estático serve.

## Rodar no computador

Com Python (já vem no Mac e no Linux):

```bash
cd prontuario-de-bolso
python3 -m http.server 8000
```

Abra http://localhost:8000. Para testar no celular na mesma rede Wi-Fi, use `http://IP-DO-COMPUTADOR:8000`.

Também dá para abrir o `index.html` direto com dois cliques. Tudo funciona, menos o modo offline, que exige servidor.

## Publicar na internet (grátis)

**GitHub Pages**
1. Crie um repositório no GitHub e envie esta pasta.
2. Em *Settings → Pages*, escolha a branch `main` e a pasta `/ (root)`.
3. O endereço fica `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

**Netlify:** em app.netlify.com/drop, arraste a pasta. O endereço sai na hora.

**Vercel / Cloudflare Pages:** importe o repositório; não há comando de build e o diretório de saída é a raiz.

O endereço precisa ser **HTTPS** (todos esses são) para o modo offline e a instalação funcionarem.

### Instalar no celular
- **Android (Chrome):** menu ⋮ → *Adicionar à tela inicial* / *Instalar app*.
- **iPhone (Safari):** botão Compartilhar → *Adicionar à Tela de Início*.

## Criar ou editar uma ficha

As fichas ficam em pastas por especialidade (`fichas/cardiologia/`, `fichas/pediatria/`...).
Cada ficha também diz se é do caminho **UBS** ou **PS** (campo `caminho`). No app, os dois filtros se combinam.

1. Copie `fichas/_modelo.js` para a pasta da especialidade com o nome igual ao `id`, por exemplo `fichas/neurologia/vertigem.js`.
2. Preencha os campos. O `id` vira o link direto da ficha (`.../#vertigem`).
3. Atualize a lista de fichas do `index.html` e confira:
   ```bash
   node ferramentas/gerar-indice.js
   node ferramentas/validar.js
   ```
   O validador aponta campo faltando, id repetido, pasta diferente da especialidade, ficha fora do `index.html` e revisões com mais de 12 meses.
4. Ao alterar conteúdo clínico, atualize `revisao` (AAAA-MM-DD) e aumente `versao`. As duas aparecem no topo da ficha e na aba Fontes.

No campo `linha` de cada tratamento use: `l1` (1ª escolha), `alt` (alternativa), `adj` (adjuvante) ou `ci` (não usar).
Os 4 primeiros tratamentos `l1` aparecem como "Doses de 1ª linha" na vista rápida.

Uma ficha com campo faltando **não quebra o sistema**: ela é ignorada e o erro aparece no console do navegador (F12).

### Criar uma especialidade nova

1. Crie a pasta, por exemplo `fichas/ginecologia/`.
2. Acrescente uma linha em `ESPECIALIDADES` no `js/registro.js`: `"ginecologia": "Ginecologia e obstetrícia",`
3. Rode `node ferramentas/gerar-indice.js`.

## Fichas incluídas (revisão 20/10/2026)

| Especialidade | PS / Emergência | UBS / APS |
|---|---|---|
| Cardiologia | Dor torácica / SCA · Crise hipertensiva · IC descompensada / EAP · Fibrilação atrial | Dor torácica na UBS · Hipertensão arterial · Dislipidemia |
| Pneumologia | Crise de asma no adulto · TEP · Pneumonia comunitária | Crise de asma na UBS · DPOC |
| Neurologia | AVC agudo · Crise convulsiva / estado de mal · Cefaleia no PS | Enxaqueca e cefaleia tensional |
| Infectologia | Sepse e choque séptico | Dengue · Cistite · IVAS (resfriado, faringite, sinusite) |
| Endócrino e metabólico | Cetoacidose diabética · Hipoglicemia · Hipercalemia | Diabetes tipo 2 · Hipotireoidismo |
| Pediatria | Febre sem foco no lactente · Bronquiolite | Diarreia e desidratação · Otite média aguda |
| Dermatologia | — | Celulite e erisipela · Escabiose |
| Saúde mental | — | Depressão e ansiedade |
| Musculoesquelético | — | Lombalgia aguda |
| Trauma | TCE leve | — |
| Alergia e imunologia | Anafilaxia | — |

**35 fichas** · 18 PS · 17 UBS

## Fluxo sugerido de revisão de conteúdo

- Um médico responsável revisa cada ficha antes de liberar para a equipe.
- Use Git para histórico: cada alteração vira um commit com o motivo (ex.: "Dengue: atualiza hidratação do grupo C conforme MS 2024").
- Revise todas as fichas ao menos uma vez por ano. O validador avisa quais estão vencidas.
