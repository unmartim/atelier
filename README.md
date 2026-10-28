# Atelier

Sistema de design para o Claude Code: cria, melhora e revisa interfaces e peças visuais com acabamento de
produto real — e sem cara de IA.

- **5 modos:** Criar, Melhorar existente, Revisar, Social (carrossel/post) e Sistema (tokens/tema).
- **23 estilos de referência** (DESIGN.md) com catálogo para escolher um estilo base por peça.
- **Portão medido:** inspetor em navegador real (1440/768/390), lint de anti-padrões, contraste WCAG AA.
- **Render e crítica:** screenshots obrigatórios, até 3 rodadas de correção.

## Instalar (local)

Copie `skills/atelier` para `~/.claude/skills/atelier` e reinicie o Claude Code.

Requisitos: Node 22+, Chrome/Edge/Chromium, Python 3 e Playwright
(`npm i -D playwright && npx playwright install chromium`).

Créditos e licenças: [`skills/atelier/CREDITOS.md`](skills/atelier/CREDITOS.md). Os DESIGN.md em
`estilos/` vêm da Refero Styles e não estão no repositório: veja [`skills/atelier/estilos/README.md`](skills/atelier/estilos/README.md) para baixá-los.
