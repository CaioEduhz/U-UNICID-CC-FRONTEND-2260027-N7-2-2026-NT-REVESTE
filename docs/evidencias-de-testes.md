# Evidências de testes — Trocaverde

Teste executado em 26/10/2026 sobre a pasta do projeto.

## 1. Navegação (verificação automática de links)

Um script percorreu as 10 páginas e conferiu cada link interno (`<a href>`), a folha de estilos e as âncoras.

| Página | Resultado |
|---|---|
| index.html | Sem links quebrados |
| sobre.html | Sem links quebrados |
| projetos.html | Sem links quebrados |
| impacto.html | Sem links quebrados |
| acessibilidade.html | Sem links quebrados |
| galeria.html | Sem links quebrados |
| midia.html | Sem links quebrados |
| noticias.html | Sem links quebrados |
| contato.html | Sem links quebrados |
| orcamento_hospedagem.html | Sem links quebrados |

Total de problemas encontrados: 0. O menu principal aparece nas 10 páginas, com `aria-current="page"` na página ativa.

## 2. Estrutura e acessibilidade (verificação automática)

Em todas as 10 páginas foram confirmados: `lang="pt-BR"`, `<title>` e meta description, exatamente um `<h1>`, presença de `<header>`, `<nav>`, `<main>` e `<footer>`, e todo `<label for>` apontando para um `id` existente. Não há `<img>` sem `alt`; as ilustrações da galeria são SVG com `role="img"` e `aria-label`.

## 3. Responsividade

A página inicial foi aberta em navegador (Chromium) em 1280 px e em 390 px de largura. Em 390 px não há rolagem horizontal da página, e o menu passa para o botão de três linhas.

## 4. Testes que a equipe ainda deve fazer e registrar aqui

| Teste | Como fazer | Resultado |
|---|---|---|
| Validação HTML | Enviar cada página em validator.w3.org | A registrar |
| Validação CSS | Enviar `css/style.css` em jigsaw.w3.org/css-validator | A registrar |
| Teclado | Percorrer menu e formulário só com Tab, Shift+Tab, Enter e Espaço | A registrar |
| Leitor de tela | Testar com NVDA (Windows) ou VoiceOver (Mac) | A registrar |
| Formulário | Enviar vazio, com e-mail inválido, telefone inválido e CEP inválido; depois com dados corretos | A registrar |
| Contraste | Conferir pares de cor em um verificador de contraste WCAG | A registrar |

Anexar prints (.png) de cada validação nesta pasta.
