# Modo Melhorar (site, tela ou componente que já existe)

Regra central: **o design system do projeto manda.** Melhorar não é trocar de estilo.

## 1. Registre o antes

- Rode o projeto (ou abra a URL) e inspecione: `node vendor/taste/scripts/inspect.mjs <url> --out .taste-skill/before`
  (`--app` para painel/dashboard). Para um componente só, um screenshot da tela onde ele aparece, desktop
  e mobile.
- Leia o código: framework, método de estilo (Tailwind v3/v4, CSS modules, styled-components, CSS puro),
  tema (`tailwind.config`, variáveis CSS, `theme.ts`), biblioteca de componentes (shadcn, MUI…), e o
  componente pedido com seus usos.
- Anote o que precisa sobreviver: rotas, formulários, dados, comportamento, assets da marca.

## 2. Diagnóstico antes de mexer

Liste problemas concretos, cada um com a medida ou a regra que quebra:

```text
Sidebar (src/components/Sidebar.tsx)
- contraste do item inativo 3.1:1 (mínimo 4.5)          → references/regras-da-casa.md §Cor
- padding dos itens varia 10/12/14px                      → escala de espaçamento do tema
- item ativo só muda a cor do texto, pouco visível        → estado ativo com fundo em degrau de tom
- sem foco visível no teclado                             → references/revisar.md §Foco
- ícones de dois pacotes diferentes                       → um pacote só
```

Pedido de **revisão** para aqui: entregue o diagnóstico com as 3 mudanças de maior efeito.

## 3. Referência pontual (opcional)

Se ajudar, veja como um estilo forte resolve **aquele componente**: procure no `catalogo.md` e leia só a
parte de Components do `estilos/<id>.md` (ex.: navegação do `linear`, botões do `apple`). Também serve
`python vendor/uiux/scripts/search.py "<componente> <problema>" --domain ux` e `--stack <stack>`.
Adapte aos tokens do projeto. Não importe cores, fontes ou raios do estilo.

## 4. Mudança mínima, no escopo

- Pediu o botão: mexa no botão, em todas as variantes e estados que já existem (padrão, hover, foco,
  ativo, desabilitado, carregando), e em nada mais.
- Use os tokens existentes. Faltou um token? Crie no tema, com nome semântico, e diga.
- O problema é global (a cor primária reprova contraste em tudo)? **Avise e proponha**; não altere o tema
  sem o usuário concordar.
- Sem migração de framework nem biblioteca nova sem pedir. Confira o `package.json` antes.
- Ordem quando o escopo é a página inteira, do maior efeito ao menor risco: tipografia → cor → margens e
  ritmo → estados → troca dos componentes padrão de template.

## 5. Prove

- Inspecione de novo em `.taste-skill/after`, mesmas larguras.
- Mostre antes e depois lado a lado (mesmo enquadramento) e as medidas que mudaram.
- Clique em tudo que funcionava antes no que foi tocado.
- Em repositório: branch `fix/` ou `refactor/` e PR, seguindo o fluxo de Git do projeto.

## 6. Escalar só se pedirem

Se a tela inteira precisar de redesign, diga isso separado, com 1 a 3 estilos do catálogo e o porquê.
Não faça sem o usuário pedir.
