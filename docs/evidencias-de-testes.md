# Evidências de testes — Trocaverde


## 1. Navegação e links internos

Um script percorreu as dez páginas e verificou links internos, folha de estilos e âncoras.

| Página | Resultado registrado |
|---|---|
| `index.html` | Sem links quebrados |
| `sobre.html` | Sem links quebrados |
| `projetos.html` | Sem links quebrados |
| `impacto.html` | Sem links quebrados |
| `acessibilidade.html` | Sem links quebrados |
| `galeria.html` | Sem links quebrados |
| `midia.html` | Sem links quebrados |
| `noticias.html` | Sem links quebrados |
| `contato.html` | Sem links quebrados |
| `orcamento_hospedagem.html` | Sem links quebrados |

**Resultado:** zero problemas de links. O documento também registra a presença do menu nas dez páginas e o uso de `aria-current="page"` para identificar a página ativa.

## 2. Estrutura HTML e verificações de acessibilidade

Nas dez páginas, foram verificados:

- `lang="pt-BR"`;
- elemento `<title>` e meta description;
- exatamente um `<h1>`;
- presença de `<header>`, `<nav>`, `<main>` e `<footer>`;
- correspondência entre os atributos `for` dos `<label>` e os `id` dos campos;
- ausência de imagens sem `alt`;
- identificação acessível das ilustrações SVG da galeria por `role="img"` e `aria-label`.

Essas verificações não substituem testes manuais com teclado e leitor de tela, nem a validação formal no W3C.

## 3. Responsividade

A página inicial foi aberta no Chromium em duas larguras:

| Largura de tela | Resultado registrado |
|---:|---|
| 1280 px | Página aberta para verificação |
| 390 px | Sem rolagem horizontal; menu adaptado para apresentação compacta |

A evidência descrita refere-se à página inicial. As demais páginas também devem ser verificadas em diferentes larguras.

## 4. Observação sobre o JavaScript

O código JavaScript fornecido para análise contém as implementações de validação do formulário, armazenamento de rascunho em `localStorage` e diversas interações com o DOM. Isso confirma a presença dessas rotinas no código apresentado, mas não comprova que todos os comportamentos funcionem corretamente na versão publicada.

A validação apresentada verifica campos obrigatórios, formato básico de e-mail e tamanho mínimo. Não há verificação explícita dos padrões de telefone e CEP. O script também define `aria-invalid="true"`; o destaque visual depende de CSS correspondente. O envio ao Formspree depende de conexão, configuração válida do endpoint e resposta do serviço.

O rascunho é armazenado no navegador e inclui os valores dos campos do formulário. 


## 5. Conferência pública do GitHub

| Verificação | Resultado observado |
|---|---|---|
| Acesso ao repositório | Repositório público e acessível |
| Estrutura principal | Dez arquivos HTML e pastas `assets/`, `css/`, `docs/`, `img/` e `js/` visíveis na raiz |
| Histórico de commits | A página exibia cinco commits na consulta |


A visualização da página inicial do repositório não substitui os testes funcionais, de acessibilidade, responsividade ou validação W3C. Não marcar esses testes como aprovados sem relatório ou evidência correspondente.


## 6. Conferência do inventário do repositório

A página principal do repositório público apresenta os dez arquivos HTML, `favicon.svg` e as pastas `assets/`, `css/`, `docs/`, `img/` e `js/`. O README do repositório identifica também `css/style.css`, `assets/video/mutirao-troca.mp4`, `assets/audio/depoimento-participante.mp3` e `img/poster-mutirao.png`.

| Item | Situação |
|---|---|
| Dez páginas HTML | Listadas na raiz do repositório |
| `favicon.svg` | Listado na raiz do repositório |
| Pastas `assets/`, `css/`, `docs/`, `img/` e `js/` | Listadas na raiz do repositório |
| Arquivos internos das pastas | Conferência completa ainda necessária diretamente no GitHub |
| Seis documentos de apoio em `docs/` | Relação documentada; confirmar presença e versão de cada arquivo no diretório |

A listagem da raiz comprova apenas a presença dos diretórios, não a integridade nem a execução dos arquivos internos.
