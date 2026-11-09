# Melhorias realizadas e previstas a partir do MVP — Trocaverde

**Data da revisão:** 09/11/2026

## 1. Objetivo

Este documento organiza a evolução do MVP do Trocaverde em direção à entrega A2. Como os arquivos completos da primeira versão e um relatório comparativo de alterações não foram disponibilizados para esta revisão, a tabela distingue:

- aspectos que aparecem nos arquivos e registros atuais;
- requisitos novos ou reforçados pela A2;
- melhorias que ainda precisam de confirmação ou evidência.

Assim, não se atribui à equipe uma correção específica sem uma comparação verificável entre as versões.

## 2. Evolução identificada

| Aspecto | MVP / planejamento inicial | Situação identificada nos materiais atuais | Próxima ação ou evidência necessária |
|---|---|---|---|
| Estrutura do site | Previsão de dez páginas em HTML e CSS | A documentação e os arquivos consultados identificam dez páginas interligadas | Conferir a versão completa e publicada |
| Navegação | Menu comum às páginas | O registro de testes informa menu nas dez páginas e `aria-current="page"` | Testar todos os links na versão final |
| Acessibilidade estrutural | Uso planejado de `lang`, `alt`, teclado e semântica | O teste automático registra idioma, landmarks, títulos, labels e textos alternativos | Validar manualmente teclado, leitor de tela e contraste |
| Responsividade | Layout adaptável a diferentes telas | O teste registrado informa verificação da home em 1280 px e 390 px, sem rolagem horizontal na menor largura | Testar as dez páginas em celular e desktop |
| Galeria | Fotos de peças previstas | Os documentos registram ilustrações SVG no lugar de fotografias próprias | Manter as ilustrações ou substituir por fotos autorizadas, com créditos e `alt` |
| Conteúdo audiovisual | Vídeo e áudio de um mutirão/depoimento previstos | O README anterior descreve os arquivos de mídia como demonstrações (cartão de título de 6 s e tom de 4 s) | Substituir por conteúdo real ou deixar explícito que são demonstrações |
| Indicadores de impacto | Conteúdo educativo e indicadores previstos | A página de impacto apresenta números identificados como fictícios/ilustrativos | Manter aviso visível de que não são resultados reais |
| Formulário | Formulário com validação HTML5 planejado | O código JS fornecido valida obrigatoriedade, e-mail e tamanho mínimo, exibe erros, salva rascunho e envia ao Formspree | Testar envio real; acrescentar/conferir validação de telefone e CEP e destaque visual via CSS |
| JavaScript | Opcional no escopo da primeira versão | O código fornecido implementa dropdown, reveal, contadores, filtros, lightbox, campo condicional, contador de caracteres, `localStorage` e envio do formulário | Executar testes no navegador e conferir integração com HTML/CSS |
| Publicação | Site local na primeira entrega | A A2 exige publicação HTTPS; não foi fornecido endereço público nesta revisão | Publicar e inserir URL verificável no README |

## 3. Melhorias exigidas pela A2

A atividade A2 amplia os requisitos da primeira versão. Antes da entrega, a equipe deve comprovar:

1. **Validação do formulário com JavaScript:** o script já impede o envio inválido, exibe mensagens e direciona o foco ao primeiro campo inválido. É necessário conferir o destaque visual no CSS e complementar a validação de telefone/CEP, se esses padrões forem exigidos para os campos.
2. **Armazenamento local:** o script salva e restaura o rascunho com `localStorage`. Como isso inclui dados digitados pelo visitante, a equipe deve avaliar a necessidade e informar essa funcionalidade.
3. **Interação com o DOM:** o script apresenta várias interações, incluindo menu dropdown, filtros da galeria, lightbox e campo condicional.
4. **Envio do formulário:** o script envia os dados ao Formspree usando `fetch()`. É necessário testar o endpoint e os retornos de sucesso e erro.
4. **Publicação:** disponibilizar o site em endereço HTTPS.
5. **Versionamento colaborativo:** manter histórico de commits e comprovar o fluxo de branch e pull request solicitado.
6. **Documentação:** registrar os testes, melhorias, uso de IA e evidências.

## 4. Evidências que devem acompanhar a versão final

- Capturas de tela do MVP e da versão final, quando disponíveis, para comparação visual.
- Código ou commit que demonstre cada melhoria.
- Capturas dos testes de formulário, `localStorage` e interação com DOM.
- Relatórios dos validadores HTML e CSS.
- URL do site publicado e do repositório.

## 5. Conclusão

Os registros atuais demonstram evolução na organização e verificação estrutural do site, especialmente na navegação, semântica e responsividade da página inicial. Entretanto, a conclusão das melhorias específicas da A2 — principalmente JavaScript, publicação e fluxo de colaboração no GitHub — depende de conferência da versão completa e de evidências que ainda não constam nos materiais consultados.


## 6. Ajustes documentais identificados na conferência do GitHub

- **README da raiz:** atualizar a descrição da primeira entrega que informa JavaScript opcional e pasta `js/` reservada.
- **Descrição do repositório:** alinhar o texto curto do GitHub à proposta real de troca e reaproveitamento de roupas, evitando a interpretação de que o projeto é uma loja de venda convencional.
- **Links da entrega:** incluir a URL do site publicado somente depois de confirmar que abre com HTTPS.
- **Versionamento:** conferir se todos os integrantes possuem commits e se há pelo menos uma branch com pull request, conforme a atividade.
- **Pasta `/docs`:** confirmar que os sete documentos estão efetivamente presentes no repositório e correspondem à versão final.

Esses ajustes foram identificados pela leitura da página principal pública do repositório. Não representam correções já realizadas diretamente no GitHub.
