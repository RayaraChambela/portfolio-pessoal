# Portfólio Pessoal — 1ª Entrega

Planejamento e implementação de um portfólio pessoal, aplicando desenvolvimento orientado por
requisitos e com apoio de Inteligência Artificial durante o processo.

## Como rodar

Não há build nem dependências. Basta abrir o arquivo `index.html` diretamente no navegador,
ou servir a pasta com qualquer servidor estático:

```bash
npx serve .
```

## Estrutura do projeto

```
portfolio-pessoal/
├── index.html              # marcação da página (single page)
├── css/style.css           # estilos, tema claro/escuro, responsividade
├── js/script.js            # menu, tema, filtro de projetos, validação do formulário
├── docs/
│   ├── 01-visao-geral-e-personas.md
│   ├── 02-requisitos.md
│   ├── 03-backlog-priorizado.md
│   └── 04-processo-com-ia.md
└── README.md
```

## Documentação do processo (leia nesta ordem)

1. [Definição do projeto](docs/01-visao-geral-e-personas.md) — nome provisório, problema (≤80 palavras), teste das 5 perguntas, objetivo em uma frase, público principal, papéis de usuário, cenário de uso, suposições a validar e personas.
2. [Requisitos funcionais e não funcionais](docs/02-requisitos.md) — RF/RNF levantados.
3. [Backlog priorizado](docs/03-backlog-priorizado.md) — user stories, MoSCoW, o que entrou nesta entrega.
4. [Uso de IA no processo](docs/04-processo-com-ia.md) — onde e como a IA apoiou o trabalho.

## O que está implementado nesta entrega

- Navegação com rolagem suave e menu responsivo (hambúrguer no mobile).
- Tema claro/escuro com preferência salva no navegador.
- Seções: Início, Sobre, Habilidades, Projetos (com filtro por tecnologia) e Contato.
- Formulário de contato com validação client-side e feedback de erro por campo.

## Antes de publicar/entregar como material real

O conteúdo (nome, biografia, projetos, e-mail e links sociais) está com **dados placeholder**.
Edite diretamente:

- `index.html` → textos das seções e links (`href="#"` para GitHub/LinkedIn/repos, `mailto:seuemail@exemplo.com`).
- Nenhuma imagem externa é usada (avatar é feito em CSS), então não há assets para trocar,
  a menos que você queira adicionar uma foto real em `assets/`.

## Próximas entregas (fora de escopo aqui)

Ver seção 3.2/3.3 do [backlog](docs/03-backlog-priorizado.md): envio real de formulário
(back-end/serviço de e-mail), download de currículo em PDF, depoimentos, i18n.
