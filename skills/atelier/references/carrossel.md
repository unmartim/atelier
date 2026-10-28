# Carrossel e posts (método HTML → PNG)

O post é código: cada slide é HTML, renderizado pelo Chromium em escala 2. Resultado 2160×2700 nativo,
texto vetorial nítido, sem Canva nem Figma.

## Pasta do projeto

```text
<marca>-social/
├── assets/            # biblioteca de assets da marca (PNG transparente) + index.html (galeria)
├── carrosseis/
│   └── <tema>/
│       ├── v1/slide-01.html … slide-0N.html
│       ├── v2/…
│       └── legenda.md
└── export/<tema>-vN/  # PNGs 2x + carrossel.zip
```

## Anatomia do slide (1080×1350 CSS)

- Margem 80px. Topo: logo à esquerda, numeração `01 / 07` à direita.
- Eyebrow (rótulo curto em caixa alta, espaçado, na cor de acento).
- Título grande (72–96px, entrelinha ~1.05, tracking negativo) com **uma** palavra-chave na cor de acento.
- Corpo 28–34px, cor secundária, no máximo 3 linhas.
- Visual: asset 3D, screenshot real ou ilustração — ocupa ~40% inferior.
- Rodapé: barra de progresso (um traço por slide, atual destacado) e seta →, exceto no último.
- Capa: promessa + visual forte. Último slide: conclusão + CTA (seguir, comentar, link).

## Assets

1. Escolha uma referência de estilo de asset (ex.: 3D fosco pastel).
2. Gere com o gerador de imagem disponível: "objeto 3D fosco, pastel, fundo transparente, sem rosto,
   cores <paleta da marca>". Itere até aprovar um.
3. Com o estilo aprovado, gere a série (8–10 objetos do universo da marca) e registre em `assets/index.html`.
4. Sem gerador de imagem: faça o asset em SVG com gradientes radiais e sombra suave, e diga que é vetor.

## Versões e comparação

- Cada rodada é uma pasta `vN`. Nunca sobrescreva uma versão aprovada.
- Compare com as versões aprovadas da marca antes de entregar — não volte ao genérico.

## Exportação

```bash
node scripts/render.mjs carrosseis/<tema>/v2/slide-*.html --social --out export/<tema>-v2
```

Gera `slide-01-2x.png`… e `carrossel.zip`. Confira cada PNG antes de entregar.

## Legenda

`legenda.md`: gancho na primeira linha, 3–5 linhas de valor, CTA, até 5 hashtags relevantes.
