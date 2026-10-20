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
├── js/registro.js          registrarFicha() e validação dos campos
├── js/app.js               Interface: lista, vista rápida, ficha completa, busca
├── fichas/
│   ├── _modelo.js          Modelo comentado para criar uma ficha nova
│   ├── ps/                 Fichas do Pronto-Socorro (uma por arquivo)
│   └── ubs/                Fichas da UBS / APS
├── ferramentas/validar.js  Confere as fichas antes de publicar (Node.js)
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

1. Copie `fichas/_modelo.js` para `fichas/ps/` ou `fichas/ubs/` com um nome curto, por exemplo `fichas/ps/cetoacidose.js`.
2. Preencha os campos. O `id` vira o link direto da ficha (`.../#cetoacidose`).
3. Adicione a linha no `index.html`, junto das outras fichas:
   ```html
   <script src="fichas/ps/cetoacidose.js"></script>
   ```
4. Confira:
   ```bash
   node ferramentas/validar.js
   ```
   Ele aponta campo faltando, id repetido, ficha fora do `index.html` e revisões com mais de 12 meses.
5. Ao alterar conteúdo clínico, atualize `revisao` (AAAA-MM-DD) e aumente `versao`. As duas aparecem no topo da ficha e na aba Fontes.

No campo `linha` de cada tratamento use: `l1` (1ª escolha), `alt` (alternativa), `adj` (adjuvante) ou `ci` (não usar).
Os 4 primeiros tratamentos `l1` aparecem como "Doses de 1ª linha" na vista rápida.

Uma ficha com campo faltando **não quebra o sistema**: ela é ignorada e o erro aparece no console do navegador (F12).

## Fichas incluídas (versão 1.0, revisão 20/10/2026)

| PS / Emergência | UBS / APS |
|---|---|
| Dor torácica / SCA | Dor torácica na UBS |
| Sepse e choque séptico | Hipertensão arterial |
| AVC agudo | Dengue (grupos A–D) |
| Anafilaxia | Cistite |
| Crise de asma no adulto | Crise de asma na UBS |
| Crise hipertensiva | |

## Fluxo sugerido de revisão de conteúdo

- Um médico responsável revisa cada ficha antes de liberar para a equipe.
- Use Git para histórico: cada alteração vira um commit com o motivo (ex.: "Dengue: atualiza hidratação do grupo C conforme MS 2024").
- Revise todas as fichas ao menos uma vez por ano. O validador avisa quais estão vencidas.
