---
name: atelier
description: Atelier, sistema de design para criar, melhorar e revisar interfaces e peças visuais com acabamento de produto real — landing pages, sites, dashboards, telas de app, componentes (botão, sidebar, formulário, tabela), design system/tokens, carrosséis de Instagram, posts e apresentações. Une 23 estilos de referência (DESIGN.md de Apple, Linear, Notion, Ramp, Revolut…), direção de arte anti-"cara de IA", inspetor em navegador real, base de UX/acessibilidade e checagem de responsivo. Use sempre que o pedido envolver criar, redesenhar, melhorar, deixar bonito, revisar ou auditar qualquer tela, página, componente ou arte — inclusive quando disserem que algo está genérico, feio ou "com cara de IA".
example-prompt: Melhora a sidebar do painel da Doctor One, está com cara de template.
---

# Atelier

Objetivo: peças que parecem feitas por um time de produto de ponta, não por IA. Toda entrega passa por
**decidir antes de pintar, construir, medir num navegador real, olhar o render e corrigir.**

## 1. Escolha o modo

| O pedido | Modo | Siga |
|---|---|---|
| Criar algo novo (landing, site, tela, dashboard, deck) | **Criar** | seção 3 |
| Melhorar um site, tela ou componente que já existe ("melhora o botão", "deixa a sidebar melhor") | **Melhorar** | `references/melhorar-existente.md` |
| Revisar, auditar, "o que está errado aqui?" | **Revisar** | `references/revisar.md` |
| Carrossel, post, story, arte | **Social** | `references/carrossel.md` |
| Tokens, tema claro/escuro, biblioteca de componentes | **Sistema** | `references/tokens.md` |

Na dúvida entre Criar e Melhorar: se já existe código ou tela, é **Melhorar**. Nunca redesenhe o site
inteiro quando pediram uma peça.

## 2. Quem manda (ordem de precedência)

1. **O pedido do usuário** e a marca do cliente (`marcas/<cliente>.md`).
2. **O design system que o projeto já tem** (tema, tokens, componentes) — no modo Melhorar.
3. **O estilo de referência escolhido** (`estilos/<id>.md`). Se ele usa algo que as regras da casa
   proíbem (eyebrow, numeração, mono), o estilo vence: é escolha real de uma marca real, não costume de IA.
4. **As regras da casa** (`references/regras-da-casa.md`) — valem onde nada acima decidiu.
5. **As bases de consulta** (`vendor/uiux`, `vendor/taste/library`) — sugestões, nunca ordens. Confira se
   a sugestão serve ao produto antes de usar.

## 3. Modo Criar

1. **Leia o pedido e o projeto.** Assunto, público, a única ação que a peça precisa provocar, stack
   (veja `package.json`; nunca suponha), marca existente, e **quais imagens existem de verdade**. Pedido
   vago: decida, diga em uma linha o que entendeu e siga; pergunte só se faltar algo que trava.
2. **Inventário do assunto.** 8 a 12 coisas que pertencem a este cliente e a nenhum concorrente
   (nome e o que significa, lugar, números reais, restrições, materiais, rituais, objetos impressos do
   mundo dele). É daqui que vem a ideia.
3. **Argumento.** Liste a página como afirmações com prova, uma linha por seção. Seção sem afirmação sai.
4. **Direção.** Escolha o estilo base em `catalogo.md` (1 a 3 candidatos, com motivo). Se nenhum servir,
   gere direções com `node vendor/taste/scripts/draw.mjs --sector <setor> --brief "<assunto>" --options 3`.
   Para referência de UX, paleta ou tipografia por tipo de produto:
   `python vendor/uiux/scripts/search.py "<produto> <setor>" --design-system`.
5. **A ideia.** Escreva: *"Nesta página, [algo do inventário] vira [o recurso da direção]."* Teste do
   concorrente: troque pelo concorrente mais próximo; se a frase continuar valendo, a ideia é genérica.
6. **Plano de tokens antes do código:** 4–6 cores nomeadas (hex), 1–2 fontes com papéis, conceito de
   layout em wireframe ASCII, princípios. Revise o plano contra o pedido: o que parecer padrão de qualquer
   página parecida, troque, e diga o quê. Tokens: `references/tokens.md`.
7. **Texto.** Escreva o conteúdo todo antes do markup (`references/escrita.md`). Prova nunca é inventada.
8. **Construa parado** (sem animação): tokens → hero no desktop e no celular → cada seção → imagens →
   estados e semântica. Responsivo: `references/responsivo.md`.
9. **Portão:** veja seção 5.
10. **Movimento** por último, só transform/opacity, com `prefers-reduced-motion`. Um momento orquestrado
    vale mais que fade em tudo.
11. **Entregue** (seção 6).

## 4. A marca do cliente

Procure `marcas/<cliente>.md`. Se não existir, siga `references/marcas.md`. Regra de combinação: grid,
espaçamento, escala, raios, elevação e estrutura dos componentes vêm do estilo; cor de acento, logo, fonte
e tom vêm da marca. A cor da marca ocupa o papel de acento do estilo, não pinta a página inteira.

## 5. Portão (antes de dizer que terminou)

| Peça | Rode |
|---|---|
| Página web | `node vendor/taste/scripts/inspect.mjs <url ou index.html>` (1440/768/390, mede título, margens, contraste, overflow, vazios) e `node vendor/taste/scripts/lint.mjs <fontes>` |
| Tela de app / dashboard | os mesmos com `--app` |
| Componente isolado ou social | `node scripts/render.mjs <html>` (`--social` para 2x) e `node scripts/check.mjs <html>` |
| Código de UI (React/Vue/HTML) | checklist de `references/revisar.md` (diretrizes web da Vercel) |

Corrija todo FAIL. WARN é erro, a não ser que você defenda em uma frase. Se o estilo de referência pede
algo que o inspetor reprova (ex.: eyebrow), passe `--allow <regra>` e diga na entrega.

Depois **olhe as imagens** do render, todas as larguras, e critique com `vendor/taste/references/critique.md`.
Corrija os 3 maiores problemas e rode de novo. No máximo 3 rodadas. Confira também
`references/anti-padroes.md`.

## 6. Entrega

Diga, curto: modo, estilo base e por quê, a ideia, o que foi assumido, conteúdo de exemplo que precisa ser
trocado, resultado do portão (FAIL/WARN restantes) e arquivos (HTML/PR + PNGs). Não diga que checou o que
não rodou. Em repositório, mudanças vão por branch e PR, seguindo o fluxo de Git do projeto (ou a skill de Git instalada, se houver).

Quando o usuário aprovar, registre em `marcas/<cliente>.md` → "Aprovados".

## Requisitos

Node 22+ e Chrome/Edge/Chromium (inspetor da taste), Python 3 (busca da uiux), Playwright para
`scripts/render.mjs` e `scripts/check.mjs` (`npm i -D playwright && npx playwright install chromium`).
Sem algum deles: use o que houver, tire screenshots como puder e diga o que não rodou.

## Arquivos

| Arquivo | Quando |
|---|---|
| `catalogo.md` → `estilos/<id>.md` | Escolher e ler o estilo base (um só). Se o arquivo não existir, use a linha do catálogo e avise que o DESIGN.md não está instalado (`estilos/README.md`) |
| `references/regras-da-casa.md` | Regras de tipografia, cor, espaço, componentes |
| `references/melhorar-existente.md` | Modo Melhorar |
| `references/revisar.md` | Modo Revisar e checklist de código |
| `references/escrita.md` | Texto de interface e de página |
| `references/tokens.md` | Tokens, tema, componentes, design system |
| `references/responsivo.md` | Breakpoints, container queries, tipografia fluida |
| `references/receitas.md` | Estrutura por tipo de peça |
| `references/anti-padroes.md` | Antes de entregar |
| `references/carrossel.md` | Social |
| `references/marcas.md`, `marcas/_modelo.md` | Ficha da marca |
| `vendor/taste/` | Direções, inspetor, crítica, imagens abertas (`GUIA.md` tem o procedimento completo dela) |
| `vendor/uiux/` | Base pesquisável: estilos, paletas, fontes, 119 regras de UX, stacks |
| `vendor/wshobson/` | Padrões detalhados de design system e responsivo |
| `scripts/render.mjs`, `scripts/check.mjs` | Render e contraste para social e componentes |
| `CREDITOS.md` | Origem e licença de cada parte |
