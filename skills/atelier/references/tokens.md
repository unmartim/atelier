# Tokens e design system

Detalhe e exemplos: `vendor/wshobson/design-system-patterns/references/` (`design-tokens.md`,
`theming-architecture.md`, `component-architecture.md`).

## Três camadas

| Camada | Exemplo | Regra |
|---|---|---|
| Primitivo | `--blue-600: #2563eb` | Valor cru. Nunca usado direto em componente. |
| Semântico | `--color-text`, `--color-surface`, `--color-accent`, `--color-border` | Nome pelo propósito, não pela aparência. É o que o tema troca. |
| Componente | `--button-bg: var(--color-accent)` | Só quando o componente precisa de ajuste próprio. |

- Nomes em kebab-case, sem misturar convenções.
- Componentes só referenciam tokens; nenhum hex solto.
- Escalas: espaçamento (4/8 ou a do estilo), tipografia (a do estilo), raio (no máximo 3 valores),
  elevação (no máximo 3 níveis).

## Do DESIGN.md para tokens

O `estilos/<id>.md` já traz a tabela de cores com nome, valor e papel, além de tipografia e espaçamento.
Transforme em primitivos e semânticos; o papel no DESIGN.md vira o nome semântico. A cor da marca do
cliente substitui o primitivo do acento.

## Tema claro e escuro

- O escuro não é inversão automática: escolha degraus próprios e valide o contraste nele.
- `prefers-color-scheme` como padrão, escolha do usuário salva, `color-scheme` no `<html>`.
- Teste todos os componentes nos dois temas.
- Respeite `prefers-reduced-motion` e `prefers-contrast`.

## Componentes

- Variantes e tamanhos por prop (`variant="primary|secondary|ghost"`, `size="sm|md|lg"`), não por classe
  avulsa.
- Composição por slots ou componentes compostos (`<Card><Card.Header/>…`) quando há partes.
- Mudar token é mudar API: versione e deixe caminho de migração.

## Stacks

Tailwind: tokens em `@theme` (v4) ou `theme.extend` (v3). shadcn: variáveis em `globals.css`.
Detalhe por stack: `python vendor/uiux/scripts/search.py "<assunto>" --stack <stack>`.
