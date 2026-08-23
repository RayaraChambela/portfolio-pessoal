# 02. Levantamento de Requisitos

Requisitos elicitados a partir do objetivo do projeto (ver [01-visao-geral-e-personas.md](01-visao-geral-e-personas.md)),
com apoio de IA para revisão de completude (checagem de lacunas: acessibilidade, responsividade,
performance, SEO básico — itens fáceis de esquecer em um levantamento manual).

## 2.1 Requisitos Funcionais (RF)

| ID | Descrição | Prioridade |
|----|-----------|------------|
| RF01 | O sistema deve exibir uma seção "Início/Hero" com nome, cargo/título e chamada para ação. | Must |
| RF02 | O sistema deve exibir uma seção "Sobre" com biografia resumida. | Must |
| RF03 | O sistema deve exibir uma seção "Habilidades" listando competências e ferramentas por categoria. | Must |
| RF04 | O sistema deve exibir uma seção "Projetos" com cartões contendo nome, descrição, ferramentas usadas e links (estudo de caso/protótipo). | Must |
| RF05 | O sistema deve permitir filtrar os projetos exibidos por categoria (ex.: Branding, UI/UX, Editorial). | Should |
| RF06 | O sistema deve exibir uma seção "Contato" com formulário (nome, e‑mail, mensagem) e links diretos (e‑mail, Behance/Dribbble, LinkedIn). | Must |
| RF07 | O sistema deve validar os campos do formulário de contato no navegador antes do envio (nome obrigatório, e‑mail em formato válido, mensagem obrigatória). | Must |
| RF08 | O sistema deve fornecer um menu de navegação fixo com rolagem suave até cada seção. | Must |
| RF09 | O sistema deve fornecer um alternador de tema claro/escuro, com a preferência salva no navegador. | Should |
| RF10 | O sistema deve fornecer um menu adaptado (hambúrguer) em telas estreitas. | Must |
| RF11 | O sistema deve exibir um rodapé com ano corrente automático e links sociais. | Could |
| RF12 | O sistema deve permitir baixar/abrir um currículo em PDF a partir de um botão. | Could |
| RF13 | O sistema deve exibir um indicador de "campo obrigatório não preenchido" por campo do formulário (mensagens de erro inline). | Should |

## 2.2 Requisitos Não Funcionais (RNF)

| ID | Descrição | Prioridade |
|----|-----------|------------|
| RNF01 | **Responsividade:** o layout deve se adaptar corretamente a telas de 320px a 1920px de largura. | Must |
| RNF02 | **Desempenho:** a página deve carregar sem dependências externas pesadas (sem frameworks JS de terceiros), usando apenas HTML/CSS/JS nativos. | Must |
| RNF03 | **Acessibilidade:** elementos interativos devem ser navegáveis por teclado e ter `aria-label`/texto alternativo quando aplicável; contraste mínimo AA. | Should |
| RNF04 | **Compatibilidade:** deve funcionar nas versões atuais de Chrome, Firefox e Edge. | Must |
| RNF05 | **Manutenibilidade:** o código deve ser organizado em arquivos separados (HTML/CSS/JS) e comentado nas partes não triviais. | Should |
| RNF06 | **SEO básico:** deve conter `<title>`, meta description e estrutura semântica de headings (h1 único, hierarquia correta). | Should |
| RNF07 | **Portabilidade:** deve rodar abrindo o `index.html` diretamente no navegador, sem servidor/back-end obrigatório. | Must |
| RNF08 | **Privacidade:** o formulário de contato não deve enviar dados para nenhum serviço de terceiros sem consentimento explícito do usuário do site (nesta entrega, envio é simulado/local). | Must |

## 2.3 Restrições

- Sem back-end nesta entrega — persistência de tema via `localStorage`; envio de formulário é
  simulado (mensagem de sucesso na tela), preparado para plugar um serviço real depois (ex.:
  Formspree, EmailJS) numa entrega futura.
- Sem dependências externas de build (não usa bundler); todo o código é HTML/CSS/JS puro.
- Conteúdo (nome, projetos, bio) é **placeholder** nesta entrega, isolado em poucos pontos do
  HTML para facilitar a substituição pelos dados reais.
