# 03. Backlog do Produto e Priorização

## 3.1 Método de priorização

Priorização por **MoSCoW** (Must / Should / Could / Won't), cruzada com **valor para o
usuário × esforço de implementação**, para decidir o que entra no MVP (1ª entrega) e o que
fica para as próximas.

## 3.2 Backlog (User Stories)

| # | User Story | Prioridade | Esforço | Entrega |
|---|------------|:----------:|:-------:|:-------:|
| US01 | Como visitante, quero ver imediatamente o nome e a área de atuação da pessoa, para saber se estou no lugar certo. | Must | Baixo | 1ª |
| US02 | Como visitante, quero ler um resumo sobre a trajetória da pessoa, para entender seu contexto profissional. | Must | Baixo | 1ª |
| US03 | Como recrutador(a), quero ver as habilidades e ferramentas organizadas por categoria, para casar rapidamente com os requisitos de uma vaga. | Must | Baixo | 1ª |
| US04 | Como visitante, quero ver projetos com descrição, ferramentas usadas e link, para avaliar a qualidade do trabalho. | Must | Médio | 1ª |
| US05 | Como recrutador(a), quero filtrar os projetos por categoria (Branding/UI-UX/Editorial), para não perder tempo com o que não interessa. | Should | Médio | 1ª |
| US06 | Como visitante, quero enviar uma mensagem de contato direto pela página, para iniciar uma conversa sem precisar abrir meu e-mail. | Must | Médio | 1ª |
| US07 | Como visitante, quero ser avisado(a) quando esqueço de preencher um campo obrigatório do formulário, para corrigir antes de enviar. | Should | Baixo | 1ª |
| US08 | Como visitante em um celular, quero um menu compacto (hambúrguer), para navegar sem que o menu ocupe a tela toda. | Must | Médio | 1ª |
| US09 | Como visitante, quero alternar entre tema claro e escuro, para ler com mais conforto conforme minha preferência. | Should | Baixo | 1ª |
| US10 | Como visitante, quero clicar em ícones de redes sociais/e-mail, para contatar a pessoa pelo canal que eu preferir. | Should | Baixo | 1ª |
| US11 | Como recrutador(a), quero baixar o currículo em PDF direto da página. | Could | Baixo | 2ª |
| US12 | Como visitante, quero ver depoimentos/recomendações de terceiros, para ter mais confiança na contratação. | Could | Médio | 2ª |
| US13 | Como administrador(a) do site, quero editar o conteúdo (projetos, textos) sem mexer no código, via painel ou CMS. | Won't (nesta fase) | Alto | 3ª+ |
| US14 | Como visitante, quero que o formulário envie e-mail de verdade (integração com serviço de e-mail). | Could | Médio | 2ª |
| US15 | Como visitante internacional, quero trocar o idioma da página (PT/EN). | Won't (nesta fase) | Alto | 3ª+ |

## 3.3 Justificativa da priorização

- **Must** concentra tudo que é necessário para o critério de sucesso #1 e #2 do MVP (entender
  quem é a pessoa e navegar sem fricção): identidade, prova técnica (projetos/skills) e um
  canal de contato funcional — sem isso o portfólio não cumpre sua função básica.
- **Should** entra no MVP porque tem esforço baixo/médio e aumenta muito a qualidade percebida
  (filtro de projetos, tema escuro, validação amigável) sem comprometer o prazo da 1ª entrega.
- **Could** foi adiado porque depende de decisões fora do controle desta entrega (arquivo de
  currículo real, integração com serviço externo de e-mail) ou agrega valor incremental que não
  bloqueia o uso do produto.
- **Won't (nesta fase)** exige infraestrutura (CMS, backend, i18n) desproporcional ao objetivo
  da 1ª entrega, que é validar o MVP.

## 3.4 Mapeamento User Story → Requisito

| User Story | Requisito(s) atendido(s) |
|---|---|
| US01 | RF01 |
| US02 | RF02 |
| US03 | RF03 |
| US04 | RF04 |
| US05 | RF05 |
| US06 | RF06 |
| US07 | RF07, RF13 |
| US08 | RF10 |
| US09 | RF09 |
| US10 | RF06, RF11 |
| US11 | RF12 |
