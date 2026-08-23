# 01. Definição do Projeto (Contexto e Visão Geral)

> Estrutura desta seção alinhada ao checklist da Oficina 1 — "Definição do projeto"
> (Aula 02 — Planejamento do sistema): nome provisório, problema em até 80 palavras,
> objetivo em uma frase, público principal, até três papéis de usuário, cenário real de
> uso e suposições a validar. O teste das cinco perguntas e o detalhamento de público
> (papel, contexto, necessidade, dispositivo) também estão cobertos abaixo.

## 1.1 Nome provisório

**Portfólio Pessoal — [Nome Completo]** (nome de trabalho desta entrega; o conteúdo é
propositalmente genérico/placeholder — ver [04-processo-com-ia.md](04-processo-com-ia.md)
sobre o que ainda precisa ser substituído por dados reais).

## 1.2 Problema (em até 80 palavras)

Recrutadores(as) de design, clientes em potencial e colegas de profissão avaliam
candidatos e prestadores de serviço rapidamente, muitas vezes em menos de dois minutos,
antes de decidir se seguem o contato. Hoje essa avaliação depende de informações
espalhadas entre currículo em PDF, LinkedIn e perfis como Behance ou Dribbble, sem um
único lugar que mostre proposta de valor, habilidades e trabalhos concretos. Isso faz
bons profissionais perderem oportunidades por não conseguirem ser avaliados com rapidez
e clareza suficientes. *(78 palavras)*

### O teste das cinco perguntas

| # | Pergunta | Resposta |
|---|----------|----------|
| 1 | Quem enfrenta o problema? | Recrutadores(as) de design, clientes em potencial (freelance/consultoria) e colegas de profissão que avaliam candidatos ou prestadores de serviço. |
| 2 | O que essa pessoa tenta fazer? | Decidir rapidamente se vale a pena chamar o profissional para entrevista, contratar para um projeto ou recomendá-lo. |
| 3 | O que dificulta essa tarefa hoje? | As evidências do trabalho (peças, processo, contato) estão espalhadas em currículo, LinkedIn, Behance/Dribbble e trocas de e-mail — sem um lugar único e rápido de consultar. |
| 4 | Que consequência isso provoca? | Profissionais qualificados são descartados ou demoram a ser contatados só porque a avaliação inicial é lenta ou incompleta. |
| 5 | Que mudança indicaria que o sistema funcionou? | Um visitante entende, em poucos minutos e em um único link, quem é o profissional, vê os trabalhos e inicia contato — sem pedir mais material. |

## 1.3 Objetivo do sistema (uma frase)

> O sistema deve permitir que **recrutadores(as) e clientes em potencial** consigam
> **avaliar rapidamente o perfil, as habilidades e os trabalhos de um(a) designer em um
> único link**, em **um primeiro contato com poucos minutos disponíveis**, reduzindo **o
> tempo e a fragmentação da avaliação inicial**.

Note que o objetivo fala de resultado para o público, não de tecnologia — HTML/CSS/JS
puro é uma decisão de implementação (ver [02-requisitos.md](02-requisitos.md)), não o
objetivo do projeto.

## 1.4 Público principal

| Dimensão | Descrição |
|---|---|
| **Papel/perfil** | Recrutador(a) de design ou cliente em potencial avaliando um(a) profissional para uma vaga ou projeto freelance. |
| **Contexto de uso** | Acessa o link do portfólio recebido por e-mail ou LinkedIn, geralmente entre outras tarefas, com poucos minutos disponíveis. |
| **Necessidade principal** | Entender rapidamente quem é o profissional, o que sabe fazer e ver evidências concretas (trabalhos) antes de decidir se inicia contato. |
| **Dispositivo e experiência** | Majoritariamente desktop/notebook durante o expediente, mas precisa funcionar também em celular; fluência digital básica a intermediária, sem paciência para navegação confusa. |

*(Os públicos secundários — cliente em potencial e colega/par avaliador — estão
detalhados como personas na seção 1.8, pois têm comportamentos distintos que valem a
pena diferenciar na priorização de conteúdo.)*

## 1.5 Papéis de usuário (até três)

| Papel | Interesse principal |
|---|---|
| **Visitante / usuário final** (recrutador, cliente ou colega) | Avaliar o profissional e decidir se inicia contato. |
| **Administrador(a) do conteúdo** (a própria pessoa dona do portfólio) | Manter os dados atualizados: projetos, bio, links de contato. |
| **Colega/par avaliador(a)** (subtipo de visitante com foco técnico) | Avaliar a qualidade do trabalho e do processo criativo, não só o resultado final. |

## 1.6 Cenário real de uso

Uma recrutadora está fechando uma vaga de design pleno e recebeu 20 indicações via
LinkedIn. Ela abre cada portfólio por até 90 segundos antes de decidir se chama para
entrevista. Ao abrir o link, vê de imediato o nome, a área de atuação e a seção de
trabalhos com filtro por categoria; escolhe o filtro "UI/UX", abre o primeiro estudo de
caso, confere as ferramentas usadas e, satisfeita, clica em "Falar comigo" para agendar
uma conversa — tudo sem sair da página.

## 1.7 Suposições a validar

1. **Canal de chegada:** assume-se que a maioria dos visitantes chega por link direto
   (e-mail/LinkedIn), não por busca orgânica — ainda não validado com dados reais de
   tráfego.
2. **Quantidade de trabalhos:** assume-se que três projetos de exemplo (um por
   categoria: Branding, UI/UX, Editorial) bastam para demonstrar competência nesta
   primeira versão — pode ser necessário mais para convencer clientes mais exigentes.
3. **Canal de contato preferido:** assume-se que o visitante prefere e-mail/formulário a
   uma ligação ou mensagem direta por WhatsApp/Instagram — precisa ser validado com o
   público real.

---

## 1.8 Personas detalhadas (aprofundamento do público)

As personas abaixo aprofundam o "público principal" (seção 1.4) e os "papéis de
usuário" (seção 1.5), diferenciando comportamentos que afetam decisões de conteúdo e
priorização (ver [03-backlog-priorizado.md](03-backlog-priorizado.md)).

### Persona 1 — Recrutador(a) de design (público principal)
- **Objetivo:** avaliar rapidamente se o perfil atende a uma vaga.
- **Comportamento:** navegação rápida, escaneia seções, foca no estilo visual e nos projetos.
- **Necessidade:** ver peças e ferramentas relevantes nos primeiros segundos, sem fricção.

### Persona 2 — Cliente em potencial (freelance/consultoria)
- **Objetivo:** entender se o profissional resolve o problema que ele tem.
- **Comportamento:** lê a seção "Sobre", olha exemplos de trabalhos parecidos com sua demanda.
- **Necessidade:** contato fácil (formulário ou link direto) e prova social (projetos concluídos).

### Persona 3 — Colega/outro(a) designer
- **Objetivo:** avaliar a qualidade visual, o processo criativo e as decisões de projeto.
- **Comportamento:** clica em links de portfólio (Behance/Dribbble), lê o racional de cada peça.
- **Necessidade:** estudos de caso com clareza sobre o papel do autor no projeto (briefing, processo, entrega).

## 1.9 Critérios de sucesso do MVP

1. Uma pessoa desconhecida consegue entender, em até 10 segundos na dobra inicial, quem é o
   profissional e o que ele faz.
2. É possível navegar por todas as seções em até 3 cliques/rolagens a partir do topo.
3. A página funciona em desktop e mobile sem quebra de layout.
4. É possível iniciar um contato (formulário ou link) sem sair da página.

## 1.10 Escopo desta entrega (1ª Entrega)

Esta entrega cobre o **planejamento completo** do produto e a **implementação de um MVP
funcional**: uma página única (single page), responsiva, com navegação, tema claro/escuro,
filtro de trabalhos e formulário de contato com validação no lado do cliente.

Fora do escopo desta entrega (backlog para entregas futuras — ver
[03-backlog-priorizado.md](03-backlog-priorizado.md)): backend real para envio de formulário,
blog/artigos, internacionalização (i18n), painel administrativo de conteúdo, testes
automatizados end-to-end.
