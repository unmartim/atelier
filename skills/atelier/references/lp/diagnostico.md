# Protocolo de diagnóstico — "onde essa página está perdendo venda?"

Este arquivo é o **como investigar**. `framework.md` é a fonte da verdade, `rubricas.md` é a régua,
`movimentos.md` é o que recomendar. Aqui está a ordem de investigação, o que coletar e como ler
sintoma → causa provável.

---

## 1. Coleta de evidência (antes de qualquer opinião)

A skill trabalha com três fontes de evidência, nesta ordem de preferência:

1. **A página ao vivo** — URL. Leia desktop **e** mobile (o texto-fonte trata dispositivo como parte
   do contexto, F1). Com as ferramentas de browser: abra a URL, capture a primeira dobra, role a
   página inteira registrando a sequência de seções, e repita em viewport de celular. Sem browser,
   use fetch da página para extrair a copy — mas então **declare que avaliou copy e estrutura, não
   hierarquia visual** (F9/F10 ficam `n/a`).
2. **Código / prints** — se a LP está no repositório ou o usuário mandou screenshots, leia a fonte.
   Extraia a sequência real de seções antes de comentar qualquer uma.
3. **O que o usuário descreve** — vale como evidência declarada. Marque como tal ("segundo você...").

**Sem nenhuma das três, não diagnostique.** Peça o link ou os prints. Diagnóstico de LP sem ver a LP
é chute com vocabulário bonito.

### Inventário obrigatório antes de avaliar

Antes de pontuar qualquer coisa, escreva (para você) o **mapa de seções**: a lista ordenada das
seções da página com uma frase do que cada uma faz. Esse mapa é o que permite avaliar F5 (narrativa)
e o que impede você de comentar seções que não existem.

## 2. Perguntas de contexto (máx. 4 por rodada)

Pergunte só o que não dá para descobrir sozinho, e nesta prioridade:

1. **De onde vem o tráfego desta página?** (canais e proporção; se for pago, qual o criativo/promessa
   do anúncio; se for busca, quais termos) — sem isso, F1 e F4 ficam cegos.
2. **Para quem essa página vende e qual o ticket?** (ICP em uma frase, ticket médio, ciclo de venda)
3. **Qual é a ação principal que você quer?** (trial, demo, compra, lista de espera) e o que acontece
   depois do clique.
4. **Quais números você tem?** (conversão da página, CAC, ativação, trial-to-paid, churn) — mesmo
   estimados. Se não houver nenhum, siga com diagnóstico qualitativo e diga isso.

Perguntas secundárias, só se sobrarem rodadas: objeções que vendas mais escuta, segmento com melhor
LTV/menor churn, concorrentes com quem o cliente compara, se existem outras LPs.

## 3. Ordem de investigação (upstream primeiro)

Percorra **F1 → F10, nessa ordem**. A ordem é o método: um erro de contexto/ICP/consciência degrada
tudo que vem depois, e "consertar" o hero de uma página que fala com o ICP errado é otimizar o
motivo errado.

Regra prática: **pare de descer quando encontrar um problema estrutural em F1-F3**. Reporte esse
como a prioridade nº 1, e trate F4-F10 como observações — porque metade delas muda sozinha depois de
corrigir a base.

## 4. Mapa sintoma → causa provável

Use como gerador de hipóteses, nunca como veredito. Cada linha vira uma hipótese que você confirma
olhando a página.

| Sintoma (o que os números/o comportamento mostram) | Hipótese principal | Onde olhar |
|---|---|---|
| Muito tráfego, bounce alto, tempo baixíssimo | A página não continua a conversa do anúncio | F1 (C2), F4 (M3) |
| Tráfego pago converte muito pior que orgânico | Uma página só servindo níveis de consciência diferentes | F3 (A1-A2), F1 (C3) |
| O usuário rola a página inteira e não clica | Prova insuficiente ou compromisso do CTA alto demais | F7, F8 (FR3) |
| Muitos cliques no CTA, poucos formulários completos | Fricção no formulário / etapas demais | F8 (FR1, FR7) |
| Volume de leads bom, qualificação ruim | ICP difuso ou promessa larga demais | F2, F4 (M2) |
| Conversão boa, ativação baixa | A página promete o que o produto não entrega no primeiro uso | F4 (M5), `SIS` (N3) |
| Trial-to-paid baixo com ativação boa | Oferta/preço mal explicados na página, expectativa errada de valor | F5 (E5), F8 (FR6) |
| Churn precoce alto | Promessa acima do produto — a LP está vendendo o cliente errado | F2 (I4), F4 (M5) |
| CAC subindo com conversão estável | Saturação de canal ou segmento errado, não problema de página | F1, F2 — diga que a LP não é o gargalo |
| Boa conversão desktop, ruim mobile | Hierarquia não sobrevive à coluna única | F9 (U5), F6 (H5) |
| Perde no comparativo com concorrente | Falta mecanismo e diferenciação para nível Solução | F3 (A4), F5 (E2), F10 (S3) |
| Muita visita vinda de busca de marca, pouca de não-marca | Página não construída para tráfego frio | F3 (A1), F5 |
| Time de vendas responde sempre as mesmas 3 perguntas | Objeções não tratadas na narrativa | F7 (P1, P2) |

## 5. Leitura dos números (`SIS`)

- **CAC + conversão da LP** dizem quanto uma melhoria vale. Sempre traduza a recomendação em
  dinheiro quando houver dado: "com 10.000 visitas/mês a 1,8%, sair para 2,4% são ~60
  oportunidades/mês pelo mesmo investimento".
- **Ativação e trial-to-paid** testam a honestidade da promessa (F4/M5).
- **LTV, churn e expansão por segmento** definem qual ICP a página deveria estar atraindo (F2/I4) —
  esse é o dado mais subutilizado em SaaS em tração.
- Se o usuário não tem os números, **peça no máximo uma vez** e siga. Diagnóstico qualitativo
  declarado é honesto; diagnóstico qualitativo disfarçado de quantitativo não é.
- Cuidado com significância: uma diferença de conversão em poucas centenas de visitas é ruído.
  Recomende teste com volume mínimo em vez de afirmar ganho.

## 6. O que NÃO fazer

1. **Não abra o Figma primeiro.** Nenhuma recomendação visual antes de F1-F4 estarem fechados. O
   visual é a etapa 9 por um motivo.
2. **Não recomende "teste A/B do botão".** O texto-fonte descarta explicitamente a discussão
   "verde ou azul" como ponto de partida.
3. **Não trate a LP como página isolada.** Se o vazamento está no canal, no ICP ou no produto, diga
   isso — mesmo que o pedido tenha sido "melhore minha landing page".
4. **Não empilhe 15 recomendações.** O framework é sequencial; um bolo de sugestões devolve ao
   usuário o trabalho de priorizar, que é justamente o trabalho.
5. **Não adjetive.** "A headline está fraca" não é entregável. Três alternativas escritas são.
