# Regras da casa

Valem quando o pedido, a marca, o projeto e o estilo de referência não decidiram. Detalhe e números do
estudo de 247 sites premiados: `vendor/taste/GUIA.md` (House rules, Laws of the craft) e
`vendor/taste/references/{type,colour,layout}.md`.

## Tipografia

- Uma família, no máximo duas — e, se duas, bem diferentes entre si. Escolha pela personalidade do
  assunto, não a fonte que você usaria em qualquer projeto.
- Dois ou três tamanhos fazem o trabalho visível: um muito grande, um pequeno. Teto de cinco tamanhos.
- Display: tracking -0.02 a -0.05em, entrelinha 0.85–1.05. Texto: 16–20px, entrelinha 1.45–1.6,
  45–75 caracteres por linha (serifa pode um pouco mais, com mais entrelinha).
- Título com no máximo duas linhas em qualquer largura. Corte palavras antes de diminuir a fonte.
- Alinhado à esquerda por padrão; centralize no máximo um momento.
- Texto corrido na cor de tinta cheia; cinza é para nota secundária.

## Cor

- Um fundo, uma tinta, um acento. O acento vai na ação e talvez em mais uma coisa.
- Superfícies se separam por degrau de tom, não por linha nem sombra.
- Contraste WCAG AA: 4.5:1 texto, 3:1 texto grande e componentes.
- Sem paleta de assistente: fundo creme com terracota, violeta/índigo de enfeite, preto com verde-ácido.

## Espaço e layout

- Um grid, um par de margens externas iguais em todas as larguras.
- Espaço entre seções claramente maior que dentro delas (120–240px no desktop em página de marketing).
- Seções vizinhas com composições diferentes; nenhuma vira grade de cards iguais.
- Nenhum trecho maior que meia tela vazio. Assimetria só dentro do grid, fechada do outro lado.
- Cada tela do desktop é um pôster: uma coisa dominante e o conteúdo que ela carrega.

## Componentes

- Botões chapados, uma cor, cantos retos **ou** totalmente redondos — decidido uma vez. O raio "macio"
  de 9–16px é o padrão de site fraco.
- Navegação: marca, 3 a 5 links, uma ação.
- Rodapé é um fechamento desenhado, não um mapa do site.
- Alvos de toque ≥ 44px; estados hover, foco, ativo, desabilitado, carregando, vazio e erro.

## Ornamento (páginas de marketing)

Sem estilo de referência pedindo o contrário, evite: eyebrow acima de títulos, numeração 01/02/03 quando o
conteúdo não é sequência, mono fora de código, linhas finas e caixas de 1px, gradientes, sombra em coisa
parada, glass/blur, palavra de destaque estilizada no título, emoji, blobs, cards com ícone no topo.

**Tirar ornamento é só metade.** Página sem enfeite e sem nada no lugar fica rala. Preencha com escala
(o principal maior), conteúdo completo, imagem feita para este assunto ou um campo de cor chapada.

> Exceções: telas de app têm regras próprias (`vendor/taste/references/app-screens.md`), nas quais bordas
> discretas e rótulos pequenos são normais. Em carrossel, numeração é legítima porque os slides são de fato
> uma sequência.

## Imagens

Preferência: do próprio projeto → geradas (se houver ferramenta) → reais do mundo do assunto em acervos
abertos com crédito (`node vendor/taste/scripts/assets.mjs "<busca>"`) → desenhadas em código → só
tipografia e cor. Nunca apresente imagem encontrada como produto, equipe ou espaço do cliente.
Software mostra a própria interface, construída em HTML com dados que fecham.
