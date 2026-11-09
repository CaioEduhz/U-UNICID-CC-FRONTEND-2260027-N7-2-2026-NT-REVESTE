# Escopo do Projeto — Trocaverde

## 1. Identificação

- **Nome da equipe:** ReVeste
- **Nome do projeto/site:** Trocaverde
- **Integrantes:** Caio Eduardo Almeida, Davi Henrique, Gabrielly Witai, Igor Santos, Isabela Calisto, Maria Eduarda Peres
- **Data:** 21/09/2026
- **Professor(a)/Disciplina:** Prof. Paulo Fratta / Front-End — UNICID

## 2. Contexto e Justificativa

A indústria da moda é uma das que mais geram impacto ambiental no mundo, com alto consumo de água, uso intensivo de recursos naturais e grande volume de descarte têxtil — agravado pelo modelo de "moda rápida" (fast fashion), que estimula o consumo excessivo e o descarte precoce de roupas em bom estado.

O Trocaverde propõe uma alternativa a esse ciclo: uma plataforma comunitária onde pessoas podem trocar, doar e reaproveitar roupas em vez de descartá-las, prolongando a vida útil das peças e reduzindo o volume de resíduos têxteis.

O tema se conecta diretamente ao eixo de sustentabilidade e impacto social da atividade porque une **consumo consciente** (reduzir a compra de peças novas), **economia circular** (reaproveitar o que já existe) e **impacto social** (aproximar comunidades através da troca, incluindo brechós e ONGs locais).

## 3. Objetivos

**Geral:** facilitar a troca e o reaproveitamento de roupas entre a comunidade, reduzindo o descarte têxtil e promovendo o consumo consciente.

**Específicos:**
1. Divulgar ao menos 3 pontos físicos de troca (feiras, brechós parceiros, coletivos) no primeiro ano do projeto.
2. Apresentar dados educativos sobre o impacto ambiental da moda rápida em pelo menos 3 páginas do site.
3. Tornar 100% do site navegável por teclado e compatível com leitores de tela.
4. Reunir uma galeria com no mínimo 10 peças fictícias disponíveis para troca, com legendas descritivas.
5. Validar o site no W3C sem erros de HTML/CSS.

## 4. Público-Alvo

- **Quem acessa:** pessoas interessadas em moda sustentável, consumo consciente e economia circular.
- **Faixa etária:** predominantemente 16 a 45 anos, mas aberto a qualquer idade.
- **Localização:** moradores de centros urbanos, com foco inicial em uma cidade/região fictícia.
- **Necessidades específicas:** pessoas com deficiência visual, motora ou auditiva são público prioritário — o site deve ser plenamente utilizável por elas, não apenas "adaptado".

## 5. Escopo Funcional (o que o site terá)

| Página | Função no projeto Trocaverde |
|---|---|
| index.html | Apresentação do Trocaverde, resumo da proposta, menu principal |
| sobre.html | História, missão, visão e valores do projeto |
| projetos.html | Feiras de troca, parcerias com brechós e ONGs, coletivos participantes |
| impacto.html | Dados e tabelas: roupas "salvas" do descarte, litros de água economizados, redução estimada de CO₂ |
| acessibilidade.html | Medidas de inclusão do site e dos pontos físicos de troca para PCD |
| galeria.html | Fotos de peças disponíveis para troca, com legendas descritivas |
| midia.html | Vídeo de um mutirão de troca, áudio com depoimento de participante, iframe (ex.: mapa dos pontos de troca) |
| noticias.html | Matérias sobre o impacto ambiental da moda rápida (fast fashion) |
| contato.html | Dados fictícios, formulário de contato validado, apresentação dos membros da equipe |
| orcamento_hospedagem.html | Relatório comparativo de hospedagem e domínio para o site |

Além das páginas, o site terá: menu de navegação principal fixo em todas as páginas, formulário de contato com validação HTML5, e seções de galeria/mídia/notícias interligadas ao restante do site.

## 6. Escopo Não Funcional

- **Acessibilidade:** texto alternativo descritivo em todas as fotos de roupas, contraste adequado de cores, navegação completa por teclado, `lang="pt-BR"`, atributos ARIA no menu e no formulário.
- **Sustentabilidade:** conteúdo educativo sobre fast fashion, escolha de hospedagem com política ambiental (green hosting), imagens otimizadas para reduzir consumo de dados.
- **Responsividade:** layout adaptável a celular, tablet e desktop (Flexbox/Grid).
- **Desempenho:** imagens comprimidas, HTML/CSS organizado e sem código redundante.
- **SEO básico:** título único por página, meta description, hierarquia correta de headings (h1–h3).

## 7. Mapa do Site

```
index.html (home)
├── sobre.html
├── projetos.html
├── impacto.html
├── acessibilidade.html
├── galeria.html
├── midia.html
├── noticias.html
├── contato.html
└── orcamento_hospedagem.html
```

O menu principal, presente em todas as páginas, permite acesso direto a qualquer uma das 10 seções a partir de qualquer ponto do site.

## 8. Conteúdo e Identidade Visual

- **Tom de voz:** acolhedor, consciente e educativo, sem discurso alarmista.
- **Paleta de cores:** verde-musgo (#4A7C59) e verde-claro (#8FBC94) para sustentabilidade, combinados com terracota (#C97B4A) e bege (#F0E6D2) remetendo a tecido e artesanato — contraste testado para acessibilidade.
- **Tipografia:** fonte sans-serif limpa (ex.: Poppins ou Open Sans) para textos corridos; uma fonte com mais personalidade (ex.: Quicksand) reservada para títulos.
- **Logotipo:** nome "Trocaverde" com um ícone que combina uma peça de roupa estilizada e uma folha.
- **Fontes de imagens:** banco de imagens gratuito (Unsplash/Pexels) com créditos indicados na página de galeria, ou produção própria da equipe com indicação de autoria.

## 9. Tecnologias e Ferramentas

- HTML5 e CSS3 (Flexbox/Grid para responsividade)
- JavaScript: opcional nesta entrega
- Editor de código: VS Code
- Controle de versão: Git/GitHub
- Validação: W3C Validator

## 10. Cronograma e Divisão de Tarefas

| Etapa | Responsável | Prazo |
|---|---|---|
| Escopo do projeto e definição visual | Todos | Semana 1 |
| index.html e sobre.html | Caio Eduardo  | Semana 2 |
| projetos.html e impacto.html | Davi Henrique  | Semana 2 |
| acessibilidade.html e galeria.html | Gabrielly Witai  | Semana 3 |
| midia.html e noticias.html | Maria Eduarda | Semana 3 |
| contato.html (formulário) e orcamento_hospedagem.html | Isabela Calisto  | Semana 4 |
| Documentação (/docs) | Maria Eduarda  | Semana 4 |
| Testes, validação W3C e ajustes finais | Todos | Semana 4 |

## 11. Riscos e Restrições

- Falta de conteúdo fotográfico próprio de peças de roupa para a galeria.
- Prazo dividido entre os integrantes pode gerar atrasos se uma página depender de outra.
- Nível de conhecimento técnico desigual em HTML/CSS entre os membros da equipe.
- Dependência de materiais de terceiros (vídeo, áudio, imagens) sujeitos a licenciamento.

## 12. Critérios de Aceitação

- As 10 páginas estão navegáveis e interligadas entre si.
- O formulário de contato está funcional e validado (HTML5).
- Os requisitos de acessibilidade (alt, contraste, teclado, ARIA) foram aplicados.
- O código HTML/CSS foi validado no W3C Validator sem erros.
- A documentação da pasta /docs está completa (README, diário de bordo, orçamento, evidências de testes).

## 13. Aprovação

- **Responsável pela validação do escopo:** Caio Eduardo Almeida (líder da equipe)
- **Data:** 21/09/2026
- **Assinatura:** Caio Eduardo Almeida
