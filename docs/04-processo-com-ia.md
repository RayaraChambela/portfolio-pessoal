# 04. Uso de Inteligência Artificial no Processo

Este documento registra, de forma transparente, como a IA (Claude, via Claude Code) foi
usada como apoio no planejamento e na implementação deste portfólio — conforme exigido pela
atividade.

## 4.1 Onde a IA foi usada

1. **Elicitação e revisão de requisitos**
   Dado o objetivo do projeto e as personas descritas em
   [01-visao-geral-e-personas.md](01-visao-geral-e-personas.md), a IA ajudou a levantar
   requisitos funcionais e não funcionais (RF/RNF em
   [02-requisitos.md](02-requisitos.md)), incluindo itens que costumam ser esquecidos em um
   levantamento manual rápido (acessibilidade, SEO básico, portabilidade sem back-end).

2. **Estruturação e priorização do backlog**
   A IA converteu os requisitos em user stories no formato "Como \<persona\>, quero
   \<ação\>, para \<benefício\>", aplicou o método MoSCoW e justificou a divisão entre a 1ª
   entrega e entregas futuras (ver [03-backlog-priorizado.md](03-backlog-priorizado.md)).

3. **Geração do código-base (HTML/CSS/JS)**
   A IA gerou a estrutura inicial do site (`index.html`, `css/style.css`, `js/script.js`)
   implementando os itens priorizados como "Must" e "Should" da 1ª entrega: navegação com
   rolagem suave, menu responsivo, alternador de tema claro/escuro com persistência em
   `localStorage`, filtro de projetos por categoria e validação de formulário no cliente.

4. **Revisão de consistência**
   A IA conferiu se cada requisito priorizado como "Must"/"Should" para a 1ª entrega tinha
   correspondência de fato implementada no código (rastreabilidade requisito → código).

## 4.2 O que ficou por conta de decisão humana

- Definição do objetivo do projeto, das personas e dos critérios de sucesso do MVP.
- Decisão final de prioridade quando havia ambiguidade entre Should/Could.
- Conteúdo real (nome, biografia, projetos verdadeiros, dados de contato) — nesta entrega o
  conteúdo é **placeholder**, propositalmente isolado no HTML para substituição posterior.
- Aprovação da stack técnica (HTML/CSS/JS puro, sem framework, sem build).

## 4.3 Limitações reconhecidas

- Conteúdo gerado pela IA para textos de exemplo (bio, descrições de projeto) é fictício e
  precisa ser substituído por informações reais antes da publicação/entrega final do
  portfólio como material de divulgação.
- O envio do formulário de contato é simulado nesta entrega (sem back-end real), conforme
  registrado como restrição em [02-requisitos.md](02-requisitos.md).
