# Diário de bordo — Trocaverde

## Decisões

- **Tema:** escolhemos moda circular e troca de roupas por render conteúdo natural para as 10 páginas obrigatórias (impacto em dados, galeria de peças, notícias sobre fast fashion).
- **Estrutura:** HTML estático e uma única folha de estilos (`css/style.css`), sem JavaScript, como permite a atividade.
- **Menu responsivo:** no celular, o menu abre e fecha com um campo `checkbox` e CSS, sem JavaScript, mantendo o uso por teclado.
- **Paleta:** verdes (sustentabilidade) com terracota e bege (tecido e artesanato). A terracota escura foi usada em botões e textos para garantir contraste com texto branco.
- **Galeria:** na primeira versão, usamos ilustrações em SVG com texto alternativo e legenda, porque ainda não temos fotos próprias das peças.
- **Orçamento:** recomendamos GitHub Pages por custo zero e HTTPS automático, com domínio `trocaverde.com.br`.

## Aprendizados

- Marcar o item atual do menu com `aria-current="page"` ajuda leitores de tela e também permite estilizar a página ativa.
- Rótulos `<label for>` ligados a cada campo e o atributo `pattern` com `title` tornam a validação do formulário compreensível sem JavaScript.
- Tabelas precisam de `<caption>` e de `scope` nos cabeçalhos para serem lidas corretamente por tecnologias assistivas.

## Dificuldades

- Manter o mesmo cabeçalho e rodapé em 10 páginas sem JavaScript ou templates: usamos um pequeno script de geração para evitar divergências.
- Conseguir vídeo e áudio próprios dentro do prazo. Mantivemos os caminhos e as tags prontos para a substituição.
- Equilibrar dados fictícios e verossimilhança nas tabelas de impacto; indicamos nas páginas que os dados são fictícios.

## Próximos passos

1. Produzir ou obter o vídeo, o áudio e o poster da página de mídia.
2. Substituir as ilustrações da galeria por fotos reais com crédito.
3. Rodar o W3C Validator em todas as páginas e registrar os resultados.
4. Testar a navegação por teclado e com leitor de tela (NVDA ou VoiceOver).
