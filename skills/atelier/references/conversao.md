# Modo Converter (páginas que precisam vender)

Vale para landing page, página de venda, de captura, de preço ou de cadastro. A pergunta que abre todo
trabalho aqui não é "o botão deveria ser verde ou azul?", e sim: **"onde essa página está perdendo
venda?"**. A resposta pode não estar na página: pode estar no tráfego, no público (ICP), no nível de
consciência, na oferta ou na prova.

Base: o framework de 10 etapas de Richard ([@richardrx](https://x.com/richardrx)), em `lp/`.

## Limite de uso (obrigatório)

> 🚫 Não use para casas de apostas, cassino, betting ou jogos de azar a dinheiro real, nem para
> **marketing predatório**: urgência ou escassez falsas, prova social fabricada, promessa que o produto
> não cumpre, dark patterns de cobrança ou cancelamento, ou direcionamento a pessoas vulneráveis
> (dívida, vício, saúde desesperada).

Essa é a condição do autor do framework para o reuso. Se o pedido cair aí, recuse em uma frase e
ofereça o que for legítimo. Vale também para pedidos "só de teste".

## Fontes (ordem de autoridade)

1. `lp/framework.md`: o texto original, etapas `F1`–`F10` + `SIS`. **Nada pode ser recomendado que o
   contradiga.**
2. `lp/diagnostico.md`: como coletar evidência, ordem de investigação, mapa sintoma → causa, leitura
   dos números.
3. `lp/movimentos.md`: catálogo de 16 correções concretas. As recomendações saem daqui.
4. `lp/rubricas.md`: critérios de pontuação. Alimentam o apêndice, não o corpo da resposta.

Leia 1–3 antes de avaliar; a rubrica, só ao pontuar. Para pricing, onboarding, ativação ou churn, use
também a skill `revenue-centric-design`, do mesmo autor, se estiver instalada.

## As 10 etapas

| Etapa | O que investiga |
|---|---|
| `F1` Contexto | De onde veio o usuário, com que expectativa, em qual dispositivo |
| `F2` ICP | Para quem a página vende: nicho verificável, job-to-be-done, custo do problema |
| `F3` Nível de consciência | Sem consciência / consciente do problema / consciente da solução (Eugene Schwartz) |
| `F4` Mensagem | O que está sendo vendido, se dá para entender em segundos, se importa para esse ICP |
| `F5` Estrutura de venda | Problema → consequência → oportunidade → mecanismo → solução → prova → oferta → redução de risco → CTA |
| `F6` Proposta de valor | Hero: headline, descrição, confiança |
| `F7` Prova e objeções | Objeção quebrada ao longo da narrativa, não só no FAQ; prova crua e verificável |
| `F8` Fricção + CTA | Campos, etapas, oferta, nível de compromisso do pedido |
| `F9` Atenção e UI | Hierarquia, ritmo, pontos focais. **Só aqui entra o visual** |
| `F10` Estranheza | Personalidade com função: atenção, diferenciação, memória |
| `SIS` | A LP no sistema: CAC, conversão, ativação, trial-to-paid, receita, LTV, churn |

**Contexto antes de pixel.** Nenhuma recomendação visual antes de fechar F1–F4. O Atelier desenha F9 e
F10 com o estilo base e as regras da casa; o resto é decidido aqui.

## Ver a página antes de falar dela

1. **URL:** abra no navegador, capture a primeira dobra, role a página inteira anotando a sequência de
   seções e repita em viewport mobile (o inspetor do Atelier faz as 3 larguras). Sem navegador, leia o
   HTML e avalie texto e estrutura, dizendo que F9 e F10 ficaram de fora.
2. **Código ou screenshots:** monte a sequência de seções a partir deles.
3. **Descrição do usuário:** vale como evidência declarada; marque como tal.

Sem nenhuma das três, peça o link ou os prints. **Não diagnostique.**

## Submodos

| Submodo | Pergunta que responde |
|---|---|
| `diagnose` (padrão) | "Por que minha LP não converte?" Varredura F1–F10 até achar onde a venda quebra |
| `brief` | "Vou construir ou redesenhar uma LP." Fecha F1–F4; sai briefing + esqueleto da narrativa |
| `hero` | "Meu hero está bom?" Headline, subheadline, confiança, ação (F6) |
| `narrative` | "A estrutura de venda faz sentido?" Fio condutor, mecanismo, prova e objeções (F5 + F7) |
| `friction` | "Onde perco no último metro?" Formulário, CTA, oferta, etapas (F8) |
| `visual` | "O visual ajuda?" Atenção, hierarquia, ritmo, estranheza (F9 + F10) |
| `full` | Diagnóstico completo, com a LP dentro do sistema de aquisição e os números (`SIS`) |

Se estiver ambíguo, faça UMA pergunta com os submodos. Colete só o contexto que falta (no máximo 4
perguntas por rodada, na prioridade de `lp/diagnostico.md` §2). Se houver URL, código ou print, examine
antes de perguntar.

## Como o Converter entra nos outros modos

- **Criar uma landing:** rode `brief` primeiro. O esqueleto da narrativa substitui o "Argumento" (passo 3
  do modo Criar) e a receita genérica de landing; o mapa objeção → prova diz onde cada prova entra; a
  escada de compromisso define texto e peso de cada CTA. Inventário e ideia (passos 2 e 5) continuam: são
  a F10. Depois do build e do portão, rode `diagnose` na página renderizada e corrija a prioridade nº 1.
- **Melhorar uma landing:** `diagnose` (ou `visual`, se pediram só o visual) antes de mexer. Vazamento em
  F1–F4 é dito antes de qualquer polimento.
- **Revisar uma landing:** `diagnose`, com os achados de render e código do modo Revisar depois.

## Formato de todo diagnóstico (pirâmide)

1. **Veredito:** um parágrafo simples. Onde a venda quebra (uma etapa nomeada como problema nº 1), por que
   isso custa dinheiro nesse contexto, e se o gargalo está na página ou antes dela.
2. **Onde está vazando:** 2 ou 3 pontos, nunca mais. Cada um: etapa (`F#`) → **a evidência vista** (frase
   exata, campo, seção que falta) → efeito na conversão → o movimento do catálogo que corrige.
3. **Material pronto:** sempre ao menos UM artefato concreto, sem esperar pedido. Pode ser 3 headlines
   escritas (movimento 2), o esqueleto no nível de consciência certo (3), o mapa objeção → contra-argumento
   (7) ou a escada de compromisso do CTA (8). Escolha o que destrava a etapa quebrada mais alta (mais
   próxima de F1).
4. **Apêndice:** scorecard da rubrica em lista compacta (`H1, headline fala do resultado do ICP: 1/2,
   frase`), com `n/a, não vi` no que não deu para avaliar.

Siglas explicadas na primeira menção. Listas em vez de tabelas largas. Ressalvas de escopo em no máximo
uma frase.

## Regras

1. **Grounding, a regra que vence todas.** Nunca comente seção, headline, botão, formulário ou elemento
   visual que você não viu (página, código, print) ou que o usuário não descreveu. Cite a evidência em cada
   apontamento. Sem ver o mobile, não fale do mobile.
2. **Contexto antes de pixel** (acima).
3. **A LP não existe no vácuo.** Considere a origem do tráfego e os números. Se o vazamento estiver antes
   (canal, ICP) ou depois (produto não cumpre a promessa → churn), diga, mesmo que o pedido tenha sido
   "melhore minha landing".
4. **Toda recomendação cita a etapa + um movimento do catálogo + a evidência.** Nada de conselho genérico
   ("adicione urgência", "teste o botão verde").
5. **Reescreva, não adjetive.** "A headline está fraca" não é entrega; três headlines escritas são.
6. **No máximo 2–3 prioridades e UMA nº 1.** O framework é sequencial: corrija de F1 para F10. Em
   `diagnose`, pare de descer quando achar problema estrutural em F1–F3.
7. **Duro no diagnóstico, propositivo na recomendação.**
8. **Hipótese é hipótese.** Não prometa ganho percentual. Diga o que testar, o que medir e com que volume
   o resultado fica confiável.

Diagnóstico `full` muito longo: entregue como página HTML e deixe no chat só o veredito e a prioridade nº 1.
Sem seção de "próximos passos"; se houver um desdobramento óbvio, feche com UMA pergunta.

## Proveniência

Framework de **Richard ([@richardrx](https://x.com/richardrx))**, artigo
["Um framework para descobrir por que uma LP não converte"](https://x.com/richardrx/status/2089755232511123628),
transcrito em `lp/framework.md`. Níveis de consciência de Eugene Schwartz, citado no original. Protocolo,
movimentos e rubricas são derivações operacionais do texto; o que vai além dele está marcado como
extrapolação ancorada. Uso sujeito à exclusão de apostas e marketing predatório acima.
