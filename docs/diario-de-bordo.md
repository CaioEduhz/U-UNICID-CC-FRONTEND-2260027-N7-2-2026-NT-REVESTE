# Diário de bordo — Trocaverde

Este diário reúne decisões, aprendizados, dificuldades e atividades registradas durante o desenvolvimento. As entradas abaixo se limitam às informações presentes nos documentos e evidências consultados.

## 21/09/2026 — Definição do projeto e do escopo

- **Tema escolhido:** moda circular e troca de roupas. A escolha permitiu distribuir o conteúdo entre as dez páginas previstas, abordando galeria de peças, impacto ambiental, notícias sobre *fast fashion* e acessibilidade.
- **Proposta:** apresentar uma rede comunitária de troca e reaproveitamento de roupas, incentivando o consumo consciente e a economia circular.
- **Estrutura inicial:** site estático em HTML e CSS, com dez páginas interligadas.
- **Identidade visual:** combinação de tons de verde, terracota e bege, associando sustentabilidade, tecido e artesanato.
- **Galeria:** foram previstas ilustrações em SVG enquanto a equipe não tivesse fotografias próprias das peças.
- **Hospedagem:** GitHub Pages foi indicado como alternativa preferencial por oferecer hospedagem gratuita para site estático e HTTPS.

## 26/10/2026 — Verificações registradas

- Foi executada uma verificação automática dos links internos das dez páginas. O relatório registra ausência de links quebrados.
- Foram conferidos, nas dez páginas, elementos estruturais como `lang="pt-BR"`, título, meta description, um `<h1>`, regiões semânticas e associação entre `label` e `id`.
- O relatório também registra que não foram encontrados elementos `<img>` sem atributo `alt`; as ilustrações SVG da galeria possuem identificação acessível.
- A página inicial foi aberta no Chromium em larguras de 1280 px e 390 px. O registro informa ausência de rolagem horizontal na largura menor.
- Permaneceram pendentes a validação formal no W3C, os testes com teclado e leitor de tela, a verificação de contraste e os testes completos do formulário.

## 09/11/2026 — Revisão da documentação para a A2

- A documentação foi reorganizada para refletir os requisitos da segunda entrega.
- Foi analisado o código JavaScript fornecido pela equipe, que contém interações para menu dropdown, efeitos de revelação ao rolar, contadores animados, filtros e lightbox da galeria.
- No formulário, o código restaura e salva rascunhos com `localStorage`, controla a exibição do campo de quantidade de peças, atualiza o contador de caracteres, valida campos obrigatórios/e-mail/tamanho mínimo e envia os dados ao Formspree por `fetch()`.
- A análise do código permite identificar a implementação prevista, mas não substitui a execução dos testes no navegador.
- Foram identificados pontos a conferir: validação explícita de telefone e CEP, estilo visual dos campos com `aria-invalid`, disponibilidade do elemento de sucesso para foco e envio efetivo pelo Formspree.
- Foi criado um registro específico para o uso de IA nesta revisão documental, sem atribuir à ferramenta atividades anteriores que não estejam documentadas.


## 09/11/2026 — Conferência do repositório público

- O repositório do projeto foi disponibilizado publicamente no GitHub.
- Na página principal foram identificados dez arquivos HTML e as pastas `assets/`, `css/`, `docs/`, `img/` e `js/`.
- A página do repositório exibia cinco commits no momento da consulta. Esse dado é apenas um retrato da consulta; é necessário verificar o histórico completo e a participação de todos os integrantes.
- O README da raiz ainda continha descrições da primeira entrega, como JavaScript opcional e pasta `js/` reservada. Essas informações precisam ser substituídas por uma descrição compatível com a A2.
- A descrição curta do repositório menciona venda de roupas sustentáveis, enquanto o conteúdo do README apresenta uma rede comunitária de troca e reaproveitamento. Foi recomendada a padronização da descrição.
- A publicação do site em HTTPS, a existência de branch com pull request e a conclusão dos testes não foram comprovadas apenas pela página inicial do repositório.

## Aprendizados registrados

- O atributo `aria-current="page"` identifica a página atual no menu e auxilia tecnologias assistivas.
- Associar cada `<label>` ao campo correspondente melhora a compreensão e a utilização dos formulários.
- Atributos como `pattern` e `title` podem orientar o preenchimento dos campos.
- Tabelas devem possuir título/legenda e cabeçalhos corretamente identificados para facilitar a leitura por tecnologias assistivas.
- A documentação deve indicar quando dados são fictícios, especialmente em páginas que apresentam indicadores de impacto.

## Dificuldades registradas

- Manter cabeçalho e rodapé consistentes nas dez páginas.
- Obter materiais audiovisuais próprios dentro do prazo.
- Substituir ilustrações por fotografias próprias ou devidamente licenciadas.
- Apresentar indicadores fictícios de forma verossímil sem induzir o visitante a interpretá-los como resultados reais.
- Concluir e registrar testes de acessibilidade e validação formal.
