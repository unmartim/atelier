# Receitas por tipo de peça

A receita dá a estrutura; o estilo dá a aparência.

## Landing page

> Página que precisa vender: antes desta receita, siga `conversao.md`. O briefing da `lp-validate`
> substitui a ordem genérica abaixo.

1. **Hero:** promessa específica (o quê + para quem + resultado), subtítulo de 1–2 linhas, um CTA primário,
   prova visual do produto (screenshot real, mockup ou render). Sem carrossel no hero.
2. **Prova social** logo abaixo (só se for real): logos, número verificável ou depoimento com nome.
3. **Problema → solução:** 2–3 blocos alternando texto e imagem do produto, não grade de ícones.
4. **Como funciona:** 3 passos.
5. **Diferencial / comparação** (opcional).
6. **Preço ou oferta** (se houver).
7. **FAQ:** 4–6 objeções reais.
8. **CTA final** repetindo a promessa. Rodapé enxuto.

Mobile: hero com CTA visível sem rolar; seções em uma coluna.

## Dashboard / painel

- Linha 1: 3–5 KPIs (número grande, variação, período). A pergunta mais importante fica no canto superior
  esquerdo.
- Linha 2: um gráfico principal (tendência). Gráficos: siga a skill `dataviz` se estiver instalada.
- Linha 3: tabela ou lista acionável (o que precisa de ação agora).
- Filtros numa única linha acima. Navegação lateral discreta.
- Estados: vazio (com próximo passo), carregando (skeleton), erro.
- Estilos que funcionam: `linear` (escuro, denso), `seline-analytics` (claro, calmo), `brex`.

## Tela de app / formulário

- Um objetivo por tela; ação primária fixa embaixo no mobile.
- Rótulos fora do campo, erro abaixo do campo em linguagem humana.
- Agrupe campos; peça só o necessário.

## Componente isolado

- Entregue todos os estados (padrão, hover, foco, desabilitado, carregando, erro) numa prancha.
- Use exatamente os tokens do estilo; documente-os no topo do arquivo.

## Apresentação / deck

- 16:9 (1920×1080). Um ponto por slide; título é a conclusão, não o tema ("Churn caiu 30%", não "Churn").
- Numeração discreta, logo pequeno, muito respiro.

## E-mail

- 600px de largura, tabela/inline CSS, um CTA, texto real acima da imagem, funciona sem imagens.

## Carrossel / post

Veja `carrossel.md`.
