# Modo Revisar

Duas camadas: **o que se vê** (render) e **o que está no código**.

## 0. Landing ou página de venda

Rode primeiro o modo Converter em `diagnose` (veja `conversao.md`). Se o vazamento for de público ou
mensagem, isso vem antes de qualquer achado visual.

## 1. Render

- Página: `node vendor/taste/scripts/inspect.mjs <url>` (`--app` para telas de app) e abra todas as imagens.
- Critique com `vendor/taste/references/critique.md` (passes, nota, limites).

## 2. Código — diretrizes web

Antes de revisar código de UI, busque a versão atual das Web Interface Guidelines da Vercel:
`https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`
e aplique todas as regras. Sem rede, use o resumo abaixo e diga que a lista pode estar desatualizada.

Resumo (o que mais falha):

- **Acessibilidade:** botão só com ícone tem `aria-label`; campo tem `<label>`; `<button>` para ação e
  `<a>` para navegação (nunca `<div onClick>`); `alt` em imagem; ícone decorativo `aria-hidden`; toasts e
  validação com `aria-live`; títulos em ordem.
- **Foco:** foco visível em tudo que é interativo (`:focus-visible`); nunca `outline: none` sem substituto;
  cabeçalho fixo não cobre o elemento focado.
- **Formulários:** `type`, `inputmode`, `autocomplete` e `name` corretos; nunca bloquear colar; erro ao lado
  do campo e foco no primeiro erro; botão ativo até o envio começar.
- **Animação:** respeita `prefers-reduced-motion`; só `transform`/`opacity`; nunca `transition: all`.
- **Tipografia:** `…` em vez de `...`; aspas curvas; `tabular-nums` em números comparáveis;
  `text-wrap: balance` em títulos.
- **Conteúdo:** textos longos têm `truncate`/`line-clamp`/`break-words`; filhos de flex com `min-w-0`;
  estado vazio tratado.
- **Imagens:** `width` e `height` explícitos; `loading="lazy"` abaixo da dobra.
- **Navegação:** filtros, abas e paginação no URL; ação destrutiva com confirmação ou desfazer.
- **Toque:** alvos ≥ 44px; `overscroll-behavior: contain` em modais e drawers; gesto sempre tem alternativa
  por clique e teclado.
- **Tema escuro:** `color-scheme: dark`; `<meta name="theme-color">`.
- **Proibido:** desativar zoom (`user-scalable=no`), `onPaste` com `preventDefault`, inputs sem label.

Para mais regras de UX com motivo: `python vendor/uiux/scripts/search.py "<tema>" --domain ux` e
`vendor/uiux/references/quick-reference.md`.

## 3. Formato da revisão

```text
## src/components/Sidebar.tsx
src/components/Sidebar.tsx:42 - botão só com ícone sem aria-label
src/components/Sidebar.tsx:18 - transition: all → listar propriedades

## Render (390px)
- menu cobre o título ao abrir; contraste do item inativo 3.1:1

## As 3 mudanças de maior efeito
1. …
```

Achado + local. Explicação só quando a correção não é óbvia.
