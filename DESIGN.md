---
name: Portfólio Pessoal — Rayara Chambela
description: Portfólio single-page de desenvolvedora front-end/full-stack em transição de carreira
colors:
  primary: "#c8341a"
  primary-dark-mode: "#ff8266"
  bg: "#fffdfb"
  bg-alt: "#f6f1ec"
  card-bg: "#ffffff"
  text: "#201a17"
  text-muted: "#6b615c"
  border: "#e8ded6"
  error: "#c4282e"
  success: "#0b7a3b"
typography:
  display:
    fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 5vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 500
    letterSpacing: "0.04em"
rounded:
  sm: "8px"
spacing:
  sm: "8px"
  md: "20px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
  card:
    backgroundColor: "{colors.card-bg}"
    rounded: "{rounded.sm}"
---

# Design System: Portfólio Pessoal — Rayara Chambela

## Overview

**Creative North Star: "O Sinal Vivo"**

> **Atualização pós-critique (v2):** a personalidade foi ajustada de "suave e confiável"
> para **técnica e direta** — decisão explícita da Rayara para melhor comunicar sua
> identidade como desenvolvedora, não mais como designer gráfica. O acento único coral e
> os neutros quentes permanecem (é o que já funciona, confirmado no critique), mas a
> geometria fica menos arredondada/decorativa e mais rigorosa.

Um sistema de neutros discretos — bege quente no claro, grafite quente no escuro — que
existe para dar espaço a um único acento coral vibrante. O coral não decora: é usado com
parcimônia, como marcador de ação e identidade (link ativo, botão primário, ponto de
destaque no logo). A tipografia reforça essa lógica de contraste único: Poppins carrega
peso e presença nos títulos, Inter cuida da leitura no corpo — e um terceiro papel,
**label/mono**, entra na v2 para elementos que remetem a código (tags de tecnologia,
labels de formulário, eyebrow), reforçando a identidade técnica. Cantos reduzidos a um
raio pequeno e consistente (8px, no lugar dos 18px/pílula anteriores) e sombra mínima
comunicam uma personalidade **técnica e direta** — precisa e confiante, sem o
"artesanal"/acolhedor da v1.

**Key Characteristics:**
- Um único acento (coral) sobre neutros quentes; nunca dois acentos competindo.
- Cantos discretos e consistentes (8px) no lugar de pílulas e raios grandes — geometria
  mais rigorosa, menos decorativa.
- Uma fonte monoespaçada aparece em elementos técnicos (tags, labels) como assinatura de
  "isto é feito por quem programa".
- Tema claro/escuro simétrico: mesma estrutura de tokens, valores invertidos em luminância.
- Sombra única e suave (`--shadow`) usada como elevação de repouso dos cards, não como
  resposta a estado.

## Colors

Paleta de acento único: neutros quentes fazem o trabalho de fundo/leitura, o coral é o
único ponto de cor com intenção (identidade + ação).

### Primary
- **Coral Sinal** (`#c8341a` claro (5,3:1 sobre branco; o `#ff5a3c` original dava 3,1:1) / `#ff8266` escuro): logo (ponto final), links ativos/
  hover, botão primário, eyebrow do hero, destaque de texto (`.highlight`), borda de foco
  de campos e botões ghost no hover. É o único acento oficial do sistema.

### Semantic
- **Erro** (`#c4282e` claro / `#f06a6e` escuro): borda de campo inválido e mensagem
  de erro do formulário de contato.
- **Sucesso** (`#0b7a3b` claro / `#3ecf7c` escuro): texto de confirmação do formulário
  (`.form-status.is-success`).

### Neutral
- **Bege Papel** (`#fffdfb` claro / `#16130f` escuro): fundo base (`--bg`).
- **Bege Cartão** (`#f6f1ec` claro / `#1e1a15` escuro): fundo de seções alternadas
  (`--bg-alt`), usado para respiração de ritmo vertical entre seções.
- **Branco Cartão** (`#ffffff` claro / `#221c16` escuro): fundo de cards e formulário
  (`--card-bg`), sempre um nível acima do fundo da seção.
- **Grafite Texto** (`#201a17` claro / `#f7f1ea` escuro): texto principal (`--text`).
- **Grafite Suave** (`#6b615c` claro / `#b8ada4` escuro): texto secundário/legendas
  (`--text-muted`) — usado em bio, descrições de projeto, rodapé.
- **Linha Quente** (`#e8ded6` claro / `#33291f` escuro): bordas de card, divisores,
  contorno de inputs (`--border`).

### Named Rules
**A Regra do Acento Único.** O coral nunca aparece em pares ou competindo com outra cor
de destaque no mesmo componente. Onde hoje existem gradientes decorativos de duas cores
nos thumbnails dos cards de projeto (`#ff9a76→#ff5a3c`, `#7c94ff→#3b5bfd`,
`#ffd36e→#ff9a3c`) e no avatar do hero (`var(--primary)→#9aa8ff`), isso **quebra** a
regra do acento único hoje — está registrado aqui como um desvio observado a resolver,
não como uma cor oficial do sistema.

## Typography

**Display Font:** Poppins (peso 600–800), com fallback em Inter/system-ui
**Body Font:** Inter (peso 400–500), com fallback em system-ui/Segoe UI/Roboto

**Character:** Poppins entrega presença geométrica e peso nos títulos; Inter mantém o
corpo neutro e legível. O par existe para separar claramente "isto é um título de
destaque" de "isto é texto de leitura", sem enfeite adicional.

### Hierarchy
- **Display/H1** (700, `clamp(1.8rem, 4vw, 2.6rem)`, 1.15): headline do hero.
- **Title/H2** (700 via `--font-display`, 1.8rem): título de cada seção (`.section__title`).
- **Title/H3** (700 via `--font-display`, tamanho herdado): título de card de habilidade
  e de projeto.
- **Body** (400, 1rem, 1.6): parágrafos, bio, descrições de projeto (`.section__text`,
  `.hero__lead` limitado a 52ch, `.section__text` a 70ch).
- **Label** (500–600, ~0.8–0.95rem): navegação, botões, tags/chips, eyebrow do hero.

### Named Rules
**A Regra do Contraste de Peso.** Nenhum texto usa peso 300 ou itálico como recurso de
hierarquia; a diferença entre display e body é feita por família (Poppins vs. Inter) e
tamanho, não por peso fino — mantém legibilidade em telas pequenas.

## Layout

Container centralizado com `max-width: 1080px` e padding lateral de 20px. Seções usam
padding vertical de 64px, alternando fundo (`--bg` / `--bg-alt`) para criar ritmo sem
divisórias visuais. Grids fluidos via `repeat(auto-fit, minmax(...))` para habilidades
(220px mínimo) e projetos (260px mínimo) — colapsam para 1 coluna naturalmente em telas
estreitas, sem breakpoint dedicado para isso.

**Responsivo:** único breakpoint em 780px, onde a navegação vira menu hambúrguer
(`position: absolute`, `flex-direction: column`) e a seção de contato empilha de 2
colunas para 1. Abaixo desse breakpoint não há outro ajuste de espaçamento — os `padding`
de seção (64px) e do hero (72px/56px) permanecem fixos mesmo em telas muito pequenas.

## Elevation & Depth

Sistema majoritariamente flat, com uma única sombra suave e difusa (`--shadow`) aplicada
em repouso — não como resposta a estado — nos cards de projeto, avatar do hero e
formulário de contato. Não há elevação em camadas (sem shadow scale de múltiplos
níveis); é um único valor reaproveitado.

### Shadow Vocabulary
- **Sombra de Repouso** (`box-shadow: 0 10px 28px rgba(32,26,23,.08)` claro /
  `rgba(0,0,0,.45)` escuro): eleva cards, avatar e formulário do fundo da seção. Usada em
  repouso, não em hover — o único hover com movimento é o `translateY(-4px)` do card de
  projeto, sem mudança de sombra.

### Named Rules
**A Regra da Sombra Única.** Existe apenas um valor de sombra no sistema. Não introduzir
uma segunda escala de elevação sem necessidade real de hierarquia de camadas.

## Shapes

**Atualização v2:** raio único e discreto (`--radius: 8px`) em cards, formulário,
skill-cards, botões, chips/tags e campos de input — substitui os 18px/pílula (999px) da
v1. Geometria mais rigorosa, sem cantos decorativamente arredondados. Bordas finas de 1px
(`--border`) fecham cards e inputs — nunca bordas grossas ou duplas.

## Components

### Buttons
- **Shape:** raio único de 8px (`--radius`), não mais pílula.
- **Primary:** fundo coral sólido, texto branco/grafite (contraste por tema), padding
  `12px 22px`, peso 600.
- **Ghost:** fundo transparente, borda neutra (`--border`), texto padrão; no hover a
  borda e o texto viram coral.
- **Hover/Focus:** primary usa `opacity: .9`; ghost muda cor de borda/texto. Todo botão
  tem anel de foco visível via `:focus-visible` (2px sólido, cor do acento, offset 2px) —
  ver A Regra do Foco Visível.

### Chips/Tags
- **Style:** fundo `--bg-alt`, borda `--border`, texto `--text-muted`, pílula, fonte
  0.8rem — usados em habilidades e nas tags de cada projeto.
- **Filtro (variant ativo):** borda e texto viram coral quando `.is-active` ou hover.

### Cards / Containers
- **Corner Style:** 8px (`--radius`).
- **Background:** `--card-bg` (sempre um nível acima do fundo da seção).
- **Shadow Strategy:** sombra de repouso única (ver Elevation).
- **Border:** 1px `--border` em skill-card e project-card.
- **Internal Padding:** 18–24px conforme o card.

### Inputs / Fields
- **Style:** fundo `--bg`, borda `--border`, raio 8px (`--radius`).
- **Focus:** borda muda para coral **e** anel de foco visível (`:focus-visible`, 2px
  sólido coral) — não depende só da mudança de cor da borda.
- **Error:** borda no tom "Erro" (`{colors.error}`, `#e5484d`, agora documentado como
  cor semântica) + mensagem abaixo do campo, ligada via `aria-describedby`/`aria-invalid`.

### Ícones
- Sprite SVG inline (`<symbol>`), traço único de 1.75px, `currentColor`. Emoji não são
  usados como ícone.

### Habilidades
- Linhas (rótulo + tags) separadas por filete de 1px, sem cards. Cards ficam para
  conteúdo com corpo, como os projetos.

### Navigation
- **Style:** header fixo (`sticky`) com blur de fundo (`backdrop-filter: blur(8px)`),
  links em `--text-muted` que viram coral no hover/foco. **Mobile:** vira coluna
  absoluta abaixo do header ao abrir o menu hambúrguer.

## Do's and Don'ts

### Do:
- **Do** manter o coral como único acento de identidade e ação — nunca introduzir um
  segundo acento "oficial" nos tokens.
- **Do** manter a simetria de tema claro/escuro: todo novo token de cor precisa de par
  claro e escuro.
- **Do** manter o raio único de 8px como assinatura de forma em qualquer componente novo
  — não reintroduzir pílulas (999px) ou raios grandes (18px).
- **Do** usar a fonte mono em elementos técnicos (tags, labels, eyebrows).
- **Do** dar a todo elemento interativo novo um anel de foco visível via `:focus-visible`.

### Don't:
- **Don't** adicionar uma segunda escala de sombra sem necessidade de hierarquia real —
  a sombra única é uma decisão deliberada, não uma lacuna.
- **Don't** reintroduzir gradientes decorativos de duas cores — a v2 já removeu os que
  quebravam a Regra do Acento Único (avatar do hero, thumbnails de projeto).
- **Don't** introduzir peso de fonte fino (300) ou itálico como recurso de hierarquia —
  quebra a Regra do Contraste de Peso.
- **Don't** suprimir o `outline` de foco sem um substituto visível equivalente.
