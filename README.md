# MEDFLOW · Prontuário de Bolso

Sistema web de raciocínio clínico rápido para **UBS / Atenção Primária** e **Pronto-Socorro / Emergência**.
Funciona no celular e no computador, pode ser instalado na tela inicial e continua funcionando sem internet depois do primeiro acesso.

Há dois formatos de ficha:

- **Completo** (condições graves ou complexas): **vista rápida** com meta de tempo crítica, sinais de alarme, primeira conduta, diagnósticos fatais a excluir, doses de 1ª linha e próxima decisão; e **ficha completa** em abas: Clínica · Exames (pedido pronto para copiar) · Tratamento · Prescrição · Conduta e retorno · Fontes.
- **Curto** (temas simples e referências): uma página com alarmes, conduta, prescrição pronta e orientações de retorno.

Toda ficha traz **prescrição ambulatorial e/ou hospitalar pronta para copiar** e **orientações de retorno**. Filtros: UBS/PS, adulto/criança e especialidade.

**Documentos** (botão no topo): atestado médico, declaração de comparecimento, receituário (importa a prescrição de qualquer ficha), prescrição hospitalar, admissão, evolução SOAP e passagem de caso (I-PASS/SBAR). Os dados do paciente não ficam salvos no aparelho; só nome, CRM e local do médico ficam lembrados no navegador.

> ⚠️ Material de apoio para profissionais de saúde. Não substitui julgamento clínico nem protocolos institucionais.
> Todo o conteúdo (doses, diluições, contraindicações) deve ser revisado por médico responsável antes do uso assistencial.

---

## Painel, calculadoras e segurança (v3.0)

- **Início em formato de painel:** saudação, atalhos (Busca clínica, Medicamentos, Calculadoras, Documentos), acesso rápido por cenário (UBS/PS), últimos acessados, indicadores, módulos em destaque e dica do dia. Menu lateral com especialidades; no celular o menu abre como gaveta.
- **Perfil:** "Dra. Licia Minatti · CRM-MS 16.871" vem preenchido (editável em Configurações) e assina os documentos.
- **Favoritos e histórico** guardados no navegador.
- **Paciente em atendimento** (peso, idade, sexo, altura, creatinina, gestação, alergias, medicações em uso). Fica só na memória e some ao recarregar.
- **Função renal:** Cockcroft-Gault (ajuste de dose), CKD-EPI 2021 (estadiamento) e Schwartz na criança.
- **Calculadora de doses por peso**, com conversão para mL, gotas e comprimidos e limite de dose máxima (`js/medicamentos.js`).
- **Segurança de medicamentos:** cada ficha reconhece os remédios citados e mostra gestação, ajuste renal, alergia (com reatividade cruzada) e interações com as medicações em uso, destacando o que se aplica ao paciente informado.
- **19 escores** integrados às fichas (Wells, PERC, sPESI, HEART, CURB-65, CRB-65, CHA₂DS₂-VA, HAS-BLED, qSOFA, Glasgow, regra canadense, ABCD², Ottawa HSA, Centor/McIsaac, Westley, PHQ-9, GAD-7, IPSS, Pádua) em `js/scores.js`.
- **Cálculos rápidos:** IMC e superfície corporal, peso estimado da criança, Holliday-Segar, reposição em queimaduras, gotejamento, ânion gap, sódio corrigido, osmolalidade, idade gestacional e DPP.

> ⚠️ As bases de medicamentos e escores são referências resumidas e precisam passar pela mesma revisão médica das fichas.

## Estrutura

```
prontuario-de-bolso/
├── index.html              Página única; carrega o registro, as fichas e o app
├── css/estilo.css          Visual (tema claro e escuro, layout de celular)
├── js/registro.js          Lista de especialidades, registrarFicha() e validação
├── js/app.js               Interface: filtros, lista, fichas (completo e curto), busca
├── js/documentos.js        Documentos médicos (atestado, receituário, evolução...)
├── docs/
│   ├── ESQUEMA-FICHAS.md   Formato de cada campo e regras de conteúdo
│   └── PENDENCIAS-REVISAO.md  Pontos a conferir na revisão médica
├── fichas/
│   ├── _modelo.js          Modelo comentado para criar uma ficha nova
│   ├── cardiologia/        Uma pasta por especialidade, uma ficha por arquivo
│   ├── pneumologia/
│   ├── neurologia/
│   └── ...                 (20 especialidades)
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
   O `gerar-indice` também carimba cada arquivo com uma impressão digital (`?v=...`), para que o navegador e o modo offline nunca fiquem presos a uma versão antiga. Rode-o sempre antes de publicar.
   O validador aponta campo faltando, id repetido, pasta diferente da especialidade, ficha fora do `index.html` e revisões com mais de 12 meses.
4. Ao alterar conteúdo clínico, atualize `revisao` (AAAA-MM-DD) e aumente `versao`. As duas aparecem no topo da ficha e na aba Fontes.

No campo `linha` de cada tratamento use: `l1` (1ª escolha), `alt` (alternativa), `adj` (adjuvante) ou `ci` (não usar).
Os 4 primeiros tratamentos `l1` aparecem como "Doses de 1ª linha" na vista rápida.

Uma ficha com campo faltando **não quebra o sistema**: ela é ignorada e o erro aparece no console do navegador (F12).

### Criar uma especialidade nova

1. Crie a pasta, por exemplo `fichas/ginecologia/`.
2. Acrescente uma linha em `ESPECIALIDADES` no `js/registro.js`: `"ginecologia": "Ginecologia e obstetrícia",`
3. Rode `node ferramentas/gerar-indice.js`.

## Fichas incluídas (revisão 21/10/2026)

**191 fichas** em 20 especialidades: Emergência e suporte de vida (PCR adulto e pediátrica, pós-PCR, SRI, ventilação, choque, sepse pediátrica...), Cardiologia, Pneumologia, Neurologia, Infectologia (TB, ILTB, sífilis, hanseníase, PEP, exantemáticas...), Endócrino e metabólico, Ginecologia e obstetrícia (pré-natal, ITU e hipertensão na gestação, anticoncepção, IST...), Pediatria (puericultura, sinais vitais por idade, crupe, coqueluche...), Gastroenterologia, Hematologia (anemias, doença falciforme), Urologia e saúde do homem, Dermatologia, Olhos/ouvido/nariz/garganta, Ortopedia/reumatologia/dor, Saúde mental, Intoxicações e acidentes (antídotos, ofídicos, escorpião, aranhas, abelhas), Trauma, Alergia, Prevenção e rastreamento, Prescrição e referências (analgésicos, anti-histamínicos, vias e diluições, hidratação venosa).

Para ver a lista atualizada com a contagem por especialidade: `node ferramentas/validar.js`.

> ⚠️ **Antes do uso assistencial**, a revisão médica deve passar por `docs/PENDENCIAS-REVISAO.md`. Lá estão os pontos que a revisão automática não conseguiu confirmar no texto original das diretrizes e as correções que ela aplicou.

## Fluxo sugerido de revisão de conteúdo

- Um médico responsável revisa cada ficha antes de liberar para a equipe.
- Use Git para histórico: cada alteração vira um commit com o motivo (ex.: "Dengue: atualiza hidratação do grupo C conforme MS 2024").
- Revise todas as fichas ao menos uma vez por ano. O validador avisa quais estão vencidas.
