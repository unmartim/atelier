# Responsivo

Detalhe e exemplos: `vendor/wshobson/responsive-design/references/` (`breakpoint-strategies.md`,
`container-queries.md`, `fluid-layouts.md`).

## Regras

1. **Mobile primeiro:** estilo base é o celular; aumente para telas maiores.
2. **Breakpoint pelo conteúdo,** não por aparelho. Quebre onde o layout quebra.
3. **Fluido em vez de fixo:** `clamp()` para tipografia e espaçamento; `%`, `fr`, `minmax()`.
4. **Container queries** para componentes que aparecem em larguras diferentes (card na sidebar e no grid).
5. **O celular é uma composição própria,** não o desktop espremido: reordene, esconda o secundário, ação
   principal ao alcance do polegar.
6. Alvos de toque ≥ 44px. Texto de corpo ≥ 16px.
7. `100dvh` em vez de `100vh` no celular. `env(safe-area-inset-*)` em layouts de borda a borda.
8. Imagens com `srcset`/`sizes`, `aspect-ratio` e `object-fit`; nunca distorcidas.
9. Tabelas: rolagem horizontal contida, ou cartões empilhados no celular.
10. Propriedades lógicas (`margin-inline`, `padding-block`).

## Conferir sempre

Larguras 1440, 768 e 390 (o inspetor da taste faz as três). Procure: overflow lateral, texto cortado,
z-index quebrando sobreposições, menus cobrindo conteúdo e imagens esticadas.
