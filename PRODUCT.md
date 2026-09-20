# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recrutadores(as), gestores de contratação e professores avaliando Rayara Chambela,
estudante de Análise e Desenvolvimento de Sistemas no IFSP, para estágio, vaga júnior ou
projetos. Situação típica: recebem o link do portfólio por e-mail ou LinkedIn e o abrem
por menos de 2 minutos, entre outras tarefas, para decidir se avançam o contato.

> Atualização (v3): o posicionamento anterior ("front-end em transição de carreira") foi
> substituído pelo que a Rayara descreveu depois: estudante de ADS com projetos de sala
> em back-end, web e mobile. O portfólio não é só de front-end.

## Product Purpose

Um portfólio pessoal de página única que permite a um(a) visitante entender, em um único
link e poucos minutos, quem é Rayara, o que ela constrói e ver evidências concretas de
trabalho, para decidir rapidamente se inicia contato — sem precisar consultar currículo,
LinkedIn e repositórios separadamente.

## Positioning

Os projetos de sala da Rayara partem do problema, não só do código, e isso é verificável
nos próprios repositórios: entrevista com a administradora da cantina e requisitos antes de
programar (Cantina Fatore), layout prototipado no Figma (Receitech), perfis de acesso e
regra de conflito de horário (Reserva de Salas). O portfólio mostra código real com o
contexto de quem o usaria.

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
