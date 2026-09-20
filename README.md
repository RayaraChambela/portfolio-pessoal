# Portfólio Pessoal — Rayara Chambela

Portfólio pessoal (v2) corrigido com as ferramentas de design do **Impeccable**, a partir
de uma v1 gerada por template. Atividade: "correção sobre design pré-existente".

## v1 → v2: o que mudou e onde ver

- **Tag `v1`**: estado do projeto antes de qualquer correção (template genérico de
  designer gráfica, conteúdo placeholder, formulário com envio simulado).
  `git checkout v1 -- .` para restaurar, ou veja o histórico com `git show v1:index.html`.
- **v2 (atual, HEAD)**: conteúdo real da Rayara (dev front-end em transição de carreira),
  desvios de design corrigidos, acessibilidade reforçada, formulário honesto.
- **[processo/index.html](processo/index.html)**: hub do processo — score de diagnóstico
  (critique 21/32, audit 12/20), catálogo dos 23 comandos do Impeccable e os 7 registros
  de aplicação (um por seção do portfólio + um de processo geral).

## Como rodar

Não há build nem dependências. Basta abrir `index.html` diretamente no navegador, ou
servir a pasta com qualquer servidor estático (recomendado, para os caminhos relativos
das páginas de processo funcionarem corretamente):

```bash
npx serve .
```

## Estrutura do projeto

```
portfolio-pessoal/
├── index.html                     # portfólio (v2)
├── css/style.css
├── js/script.js
├── PRODUCT.md                     # contexto de produto (comando init)
├── DESIGN.md                      # sistema de design (comando document/extract)
├── .impeccable/design.json        # sidecar do sistema de design
├── processo/
│   ├── index.html                 # hub do processo com Impeccable
│   ├── catalogo-comandos.html     # catálogo dos 23 comandos
│   ├── processo.css
│   └── registros/                 # 7 registros de aplicação
│       ├── header-navegacao.html
│       ├── hero.html
│       ├── sobre.html
│       ├── habilidades.html
│       ├── trabalhos.html
│       ├── contato.html
│       └── processo-geral.html
├── docs/                          # planejamento original da 1ª entrega (RF/RNF, personas)
└── README.md
```

## Comandos do Impeccable aplicados (15 de 23)

`init`, `document`, `shape`, `critique`, `audit`, `typeset`, `colorize`, `layout`,
`distill`, `clarify`, `harden`, `adapt`, `extract`, `live`, `polish` — cada um com
objetivo, evidência, análise e decisão registrados em
[processo/registros/](processo/registros/).

## Documentação do planejamento original (1ª entrega)

1. [Definição do projeto](docs/01-visao-geral-e-personas.md)
2. [Requisitos funcionais e não funcionais](docs/02-requisitos.md)
3. [Backlog priorizado](docs/03-backlog-priorizado.md)
4. [Uso de IA no processo](docs/04-processo-com-ia.md)

## O que está implementado

- Navegação com rolagem suave e menu responsivo (hambúrguer com estado visual no mobile).
- Tema claro/escuro com preferência salva no navegador.
- Seções: Início, Sobre, Habilidades, Trabalhos (filtro por tecnologia) e Contato.
- Formulário de contato com validação client-side, erros ligados via
  `aria-describedby`/`aria-invalid`, e envio honesto via `mailto:` (sem back-end nesta
  entrega — não finge um envio que não aconteceu).

## Próximas entregas (fora de escopo aqui)

Serviço real de envio de formulário (Formspree/EmailJS), os 2 projetos de exemplo da
seção Trabalhos substituídos por cases reais, perfil de LinkedIn real.
