# Portfólio Pessoal: Rayara Chambela

Portfólio de Rayara Chambela, estudante de Análise e Desenvolvimento de Sistemas no IFSP,
com os projetos de sala publicados no GitHub. Passou por uma correção de design com o
**Impeccable** (v1 → v2) e depois teve o conteúdo reescrito (v3, versão atual).

## Como avaliar esta entrega

Atividade de correção de design com o Impeccable. Onde está cada item pedido:

| Item | Onde |
|---|---|
| **v1 do portfólio** (antes das modificações) | tag [`v1`](https://github.com/RayaraChambela/portfolio-pessoal/tree/v1) |
| **v2 do portfólio** (corrigida) | tag [`v2`](https://github.com/RayaraChambela/portfolio-pessoal/tree/v2) |
| **Catálogo dos 23 comandos** | `processo/catalogo-comandos.html` (na tag `v2`) |
| **Registros da aplicação** | `processo/registros/` (7 páginas), com o ponto de partida em `processo/index.html` (na tag `v2`) |

**Para ver as páginas prontas:** o GitHub mostra o código dos arquivos `.html`, não a página renderizada. Baixe a versão desejada e abra o arquivo no navegador:

- v1: [baixar ZIP](https://github.com/RayaraChambela/portfolio-pessoal/archive/refs/tags/v1.zip), abrir `index.html`
- v2: [baixar ZIP](https://github.com/RayaraChambela/portfolio-pessoal/archive/refs/tags/v2.zip), abrir `index.html` e, dentro dele, o link "Processo de design com Impeccable" no rodapé (ou abrir `processo/index.html` direto)

Ou, com Git:

```bash
git clone https://github.com/RayaraChambela/portfolio-pessoal.git
cd portfolio-pessoal
git checkout v2      # ou v1
```

**Resumo da melhoria (v1 → v2):** critique de 21/32 (3 problemas bloqueantes) para 22/32 (0 bloqueantes), contraste do botão principal de 3,10:1 para 5,30:1 e formulário que não finge mais um envio. O hub `processo/index.html` traz a tabela antes/depois e as limitações do método.

A `main` é uma evolução posterior (v3), com o conteúdo real dos projetos de sala; ela não é a versão avaliada.

## Versões

| Tag / branch | O que é |
|---|---|
| `v1` | Template original: designer gráfica genérica, texto placeholder, formulário com envio simulado |
| `v2` | Correção de design com o Impeccable (catálogo dos 23 comandos e 7 registros em `processo/`) |
| `main` (v3) | Conteúdo real: bio de estudante de ADS e 3 projetos de sala |

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
├── js/script.js          # menu, tema e formulário (mailto:)
├── PRODUCT.md            # contexto de produto
├── DESIGN.md             # sistema de design
├── processo/             # catálogo dos 23 comandos e registros da v2
└── docs/                 # planejamento original da 1ª entrega
```

## Pendências

- Envio real do formulário (hoje abre o app de e-mail via `mailto:`).
