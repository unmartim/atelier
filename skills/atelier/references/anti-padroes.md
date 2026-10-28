# Anti-padrões

Se a peça bate em qualquer item, está errada. Corrija antes de entregar. Some a esta lista os Don'ts do
estilo escolhido.

## Cara de "feito por IA"

- Gradiente roxo→azul ou roxo→rosa como fundo padrão.
- Emoji no lugar de ícone; ícones de pacotes diferentes misturados.
- Card dentro de card dentro de card; tudo em caixa com borda e sombra.
- Três colunas de "feature" idênticas com ícone + título + 2 linhas, repetidas em toda seção.
- Glassmorphism, neon, glow ou blur sem o estilo pedir.
- Sombra forte em tudo; `box-shadow` padrão escuro.
- Texto centralizado em blocos longos.
- Títulos genéricos: "Revolucione seu negócio", "O futuro é agora", "Soluções inovadoras".
- Lorem ipsum, números inventados ("+10.000 clientes"), depoimentos e logos falsos.

## Hierarquia e layout

- Mais de um elemento competindo como principal na mesma dobra.
- Mais de um CTA primário por seção.
- Escala tipográfica sem contraste (título 24px com corpo 18px) — o estilo define a escala, use-a.
- Espaçamentos fora da escala do estilo (13px, 27px…); seções sem respiro.
- Linha de texto com mais de ~75 caracteres.
- Alinhamentos diferentes na mesma seção.

## Cor

- Cor da marca pintando a página inteira em vez de ocupar o papel de acento.
- Mais de um acento quando o estilo pede um só.
- Contraste abaixo de AA (4.5:1 texto normal, 3:1 texto grande ≥ 24px ou ≥ 18.66px bold).
- Texto cinza claro sobre fundo branco "para ficar elegante".
- Cores de status (verde/amarelo/vermelho) usadas como decoração.

## Responsivo e acabamento

- Não testado no mobile (390px); texto cortado, overflow horizontal.
- Alvo de toque menor que 44px.
- Imagens distorcidas, sem `object-fit`, ou pixeladas em 2x.
- Estados ausentes: hover, foco visível, vazio, carregando, erro.
- Fonte que não carregou (fallback Times) — confira no render.

## Social / carrossel

- Texto pequeno demais para o celular (corpo < 28px em 1080 de largura).
- Elementos encostando na borda (margem < 80px em 1080).
- Slide sem numeração/progresso quando é carrossel.
- Exportado em 1x ou como JPEG comprimido.
