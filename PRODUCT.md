# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recrutadores(as) e gestores de contratação avaliando Rayara Chambela como
desenvolvedora front-end/full-stack (júnior a pleno), e clientes em potencial avaliando-a
para projetos freelance. Situação típica: recebem o link do portfólio por e-mail ou
LinkedIn e o abrem por menos de 2 minutos, entre outras tarefas, para decidir se avançam
o contato (chamar para entrevista, responder, ou descartar).

## Product Purpose

Um portfólio pessoal de página única que permite a um(a) visitante entender, em um único
link e poucos minutos, quem é Rayara, o que ela constrói e ver evidências concretas de
trabalho, para decidir rapidamente se inicia contato — sem precisar consultar currículo,
LinkedIn e repositórios separadamente.

## Positioning

Rayara vem de outra área e migrou para desenvolvimento — isso é tratado como diferencial,
não como lacuna: ela traz visão de produto e de processo (entender o problema do usuário
antes de codar) que nem sempre está presente em quem entra direto de formação técnica.
O portfólio deve comunicar essa trajetória como força, nunca escondê-la.

## Operating Context

Site estático (sem back-end), servido como HTML/CSS/JS puro, navegado por âncoras em uma
única página: Início, Sobre, Habilidades, Trabalhos (com filtro por categoria) e Contato.
Visitante típico chega por link direto (e-mail/LinkedIn), majoritariamente em
desktop/notebook durante expediente, mas precisa funcionar também em celular.

## Capabilities and Constraints

- Stack de habilidades a exibir: HTML, CSS e JavaScript (fundamentos de front-end),
  confirmados pela própria Rayara — não incluir frameworks (React/Node/Python) que ela
  não pediu para listar.
- Formulário de contato tem validação client-side, mas o envio é **simulado**: não há
  back-end real de e-mail nesta entrega (decisão herdada do planejamento original em
  `docs/02-requisitos.md`).
- Sem CMS/admin: conteúdo é editado direto no HTML.
- GitHub real: `github.com/RayaraChambela` — deve ser linkado de verdade, não como `#`.

## Brand Commitments

- Nome: Rayara Chambela.
- E-mail de contato: rachambela@gmail.com.
- GitHub: github.com/RayaraChambela.

## Evidence on Hand

Nenhum projeto real de portfólio foi fornecido ainda. Os 3 projetos exibidos na seção
"Trabalhos" são **exemplos fictícios, porém plausíveis**, criados para demonstrar a
estrutura e o tipo de case a ser contado — devem ficar claramente substituíveis e nunca
ser tratados como entregas reais documentadas. Trabalho futuro não deve inventar
depoimentos, métricas de cliente ou números de projetos entregues além do que está aqui.

## Product Principles

1. **Velocidade de avaliação**: qualquer visitante entende quem é Rayara e o que ela faz
   em poucos segundos na dobra inicial.
2. **Honestidade acima de hype**: projetos fictícios nunca são apresentados como
   entregas reais; ficam claramente identificáveis como exemplo até serem substituídos.
3. **Transição de carreira como força**: a trajetória de outra área para dev é
   comunicada como diferencial de visão de produto, não escondida ou minimizada.
4. **Baixo atrito para contato**: iniciar uma conversa deve custar no máximo um clique
   a partir de qualquer seção.
5. **Funciona em qualquer tela**: navegação e leitura sem quebra de layout em desktop e
   mobile (critério de sucesso herdado do MVP original).

## Accessibility & Inclusion

Nenhum requisito específico de acessibilidade foi levantado pelo público-alvo até o
momento; segue-se a boa prática geral (contraste, foco de teclado, rótulos de formulário)
verificada via `/impeccable audit`.
