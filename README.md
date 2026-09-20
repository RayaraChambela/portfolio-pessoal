# Portfólio Pessoal: Rayara Chambela

Portfólio de Rayara Chambela, estudante de Análise e Desenvolvimento de Sistemas no IFSP,
com os projetos de sala publicados no GitHub. Passou por uma correção de design com o
**Impeccable** (v1 → v2) e depois teve o conteúdo reescrito (v3, versão atual).

## Versões

| Tag / branch | O que é |
|---|---|
| `v1` | Template original: designer gráfica genérica, texto placeholder, formulário com envio simulado |
| `v2` | Correção de design com o Impeccable (catálogo dos 23 comandos e 7 registros em `processo/`) |
| `main` (v3) | Conteúdo real: bio de estudante de ADS, 3 projetos de sala, terminal interativo no hero |

## O diferencial: terminal no hero

No topo da página há um terminal que funciona. Digite `help` (ou clique nos atalhos) e
use `sobre`, `skills`, `projetos`, `contato` e `tema`. Setas ↑/↓ navegam no histórico. É
HTML/CSS/JS puro e o conteúdo vem dos mesmos dados dos projetos reais.

## Projetos apresentados

- **Cantina Fatore**: Python, Flask, MySQL. Estoque e vendas de uma cantina escolar.
- **Receitech**: Node.js, Express, EJS, MySQL. Site de receitas com CRUD completo.
- **Aplicativo de Reserva de Salas**: React Native, TypeScript, Node.js, Prisma.

## Como rodar

Não há build nem dependências. Abra `index.html` no navegador, ou sirva a pasta:

```bash
npx serve .
```

## Estrutura

```
portfolio-pessoal/
├── index.html
├── css/style.css
├── js/script.js          # menu, tema, formulário (mailto:) e terminal
├── PRODUCT.md            # contexto de produto
├── DESIGN.md             # sistema de design
├── processo/             # catálogo dos 23 comandos e registros da v2
└── docs/                 # planejamento original da 1ª entrega
```

## Pendências

- Envio real do formulário (hoje abre o app de e-mail via `mailto:`).
