# Páginas que precisam vender

Vale para landing page, página de venda, de captura, de preço ou de cadastro. O Atelier cuida de como a
página **parece**. Se ela **vende**, quem responde é a skill parceira **`lp-validate`**
([leonardoperin14/skill-validatelp-richard](https://github.com/leonardoperin14/skill-validatelp-richard)),
que usa o framework de 10 etapas de Richard (@richardrx).

## Quem decide o quê

| Assunto | Quem decide |
|---|---|
| Público, origem do tráfego, nível de consciência, promessa (etapas F1–F4) | `lp-validate` |
| Ordem das seções, mecanismo, prova e objeções, oferta, risco, CTA, formulário (F5–F8) | `lp-validate` |
| Estilo, tipografia, cor, layout, imagens, movimento, responsivo | Atelier |
| Atenção, hierarquia e personalidade (F9–F10) | Atelier, conferido pela `lp-validate` no modo `visual` |

Regra de ouro (da `lp-validate`): **contexto antes de pixel.** Não desenhe o hero antes de saber quem chega,
de onde e sabendo o quê.

## Fluxo no modo Criar

1. **Antes de desenhar:** rode a `lp-validate` no modo `brief`. Ela fecha F1–F4 (perguntando o que faltar) e
   devolve o briefing, o esqueleto da narrativa pelo nível de consciência e o mapa objeção → prova.
2. **Use o briefing no Atelier:**
   - o esqueleto da narrativa substitui o "Argumento" (passo 3 do modo Criar) e a receita genérica de landing;
   - o mapa de objeções diz onde cada prova entra, ao longo da página e não só no FAQ;
   - a escada de compromisso do CTA define o texto e o peso de cada botão.
3. **Inventário e ideia** (passos 2 e 5 do Atelier) continuam: são o que deixa a página memorável. Na
   `lp-validate`, isso é a etapa F10, estranheza com função.
4. **Construa** com o Atelier e passe no portão (inspetor, contraste, anti-padrões).
5. **Depois do build:** rode a `lp-validate` no modo `diagnose`, com a página renderizada em desktop e mobile.
   Corrija a prioridade nº 1 que ela apontar e passe no portão do Atelier de novo.

## Fluxo nos modos Melhorar e Revisar

Pedido para "melhorar" ou "revisar" uma landing: rode primeiro a `lp-validate` em `diagnose`, ou em `visual`
se a pessoa pediu só o visual. Se o vazamento estiver em F1–F4 (público, promessa ou mensagem), diga isso
antes de mexer no visual: polir a interface de uma mensagem errada rende pouco.

## Sem a `lp-validate` instalada

Avise em uma linha e sugira a instalação (veja o README). Até lá, antes de desenhar, responda por escrito:
quem chega e de onde, o que essa pessoa já sabe, a promessa em uma frase, a prova real que existe e a única
ação que a página pede. Sem essas respostas, peça-as em vez de inventar.

## Limites

Mesmos da `lp-validate`: nada para apostas, cassino ou jogos de azar a dinheiro real, e nada de marketing
predatório (urgência ou escassez falsas, prova inventada, promessa acima do produto, dark patterns). Recuse em
uma frase e ofereça o que for legítimo.
