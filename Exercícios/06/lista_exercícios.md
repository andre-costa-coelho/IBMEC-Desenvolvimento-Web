## Lista de Exercícios.

### 1) Cite duas vantagens da utilização de sistemas de versionamento de código.
- Manter um histórico de alterações permite entender a evolução do software
- O sistema de versionamento permite que várias pessoas trabalhem e um projeto de maneira isolada, com o objetivo de não interferir no trabalho da equipe.
### 2) Explique a diferença entre git e github?
- Git é um sistema de controle de versão distribuído, que é usado para rastrear mudanças no código-fonte durante o desenvolvimento de software. Ele permite que várias pessoas trabalhem em um mesmo projeto, rastreiem as alterações feitas e integrem suas contribuições de forma eficiente.
- O Github é uma plataforma de hospedagem de código-fonte baseada na web, que o utiliza o Git, e fornece recursos para colaboração, como controle de acesso, rastreamento de problemas (issues), wikis, e ferramentas de revisão de código (pull requests).
### 3) Quais as três principais linguagens utilizadas na construção de documentos da Web e quais são suas principais aplicações/funcionalidades?
- HTML – corpo do documento, marcação semântica e de layout;
- CSS – formatação da apresentação, layout e animações;
- JavaScript – comportamento dinâmico, geração de conteúdo, comunicação e manipulação dos elementos do documento em ”tempo de execução”.
### 4) Qual é a diferença entre os conceitos de tag, elemento e atributo, no contexto do HTML?
- Uma tag é um elemento fundamental em HTML que define a estrutura e o significado dos elementos dentro de um documento. Podendo ser tags de abertura <tag> e tags de fechamento </tag>, que são usadas para envolver o conteúdo ao qual a tag se aplica.
- Um elemento HTML é uma estrutura completa que consiste em uma tag de abertura, conteúdo (se houver) e uma tag de fechamento (se aplicável).
- Um atributo é uma parte adicional de uma tag que fornece informações adicionais sobre a tag ou modifica o comportamento do elemento. São inseridos dentro da tag de abertura e consistem em um nome e um valor, separados por um sinal de igual (=).
### 5) Desenvolva um documento HTML mínimo que contenha um parágrafo com a frase “Estou por aqui”, tenha o título “minha página” e use a codificação de caracteres utf-8.
```
<!DOCTYPE html>
<html lang="pt-br" > 
    <head>
        <title>minha página</title>
        <meta charset="utf-8">
    </head>
    <body>
        <p>Estou por aqui</p>
    </body>
</html>
```
### 6) O que é uma “pilha de protocolos”, no contexto da internet?
Uma pilha de protocolos se refere a um conjunto de protocolos de comunicação interconectados que são usados em conjunto para permitir a comunicação entre diferentes dispositivos em uma rede de computadores. O modelo OSI é geralmente utilizado, e consiste em:
- Aplicação
  - viabilizar aplicações de rede: FTP, SMTP, HTTP.
- Transporte
  - transferência de dados entre processos: TCP, UDP.
- Rede
  - roteamento de datagramas da origem até o destino: IP.
- Enlace
  - transferência de dados entre elementos vizinhos na rede: Ethernet, 802.11(WiFi), PPP.
- Físico
  - movimenta ‘bits’ na meio físico.
### 7) Quais são os principais protocolos da camada de transporte da internet e qual a principal diferença entre eles?
- Os principais protocolos são TCP (Protocolo de Controle de Transmissão) e UDP (Protocolo de datagrama do usuário).
- Ao contrário do protocolo TCP, o UDP não oferece transporte de dados confiável, controle de fluxo, controle de congestionamento, controle de tempo, garantia de desempenho (throughput) mínimo e configuração de conexão. No entanto ele é utilizado por funcionar mais rapidamente. 
### 8) Quais as principais características da arquitetura cliente-servidor e como ela se diferencia de aplicações peer-to-peer?
- A arquitetura cliente-servidor está sempre 'no ar' e possui endereço de ip permanente. Os cliente também comunicam-se com o servidor, podem ter conexões intermitentes, podem ter endereços IP dinâmicos  e não se comunicam diretamente entre si
- Já a arquitetura P2P não existe servidor sempre ligado, e tem comunicação direta entre sistemas finais arbitrários. Os usuários (peers) requisitam serviços de outros usuários e, ao mesmo tempo, fornecem serviços para outros usuários. É auto escalável, ou seja, novos usuários trazemnova capacidade de fornecer e demandar serviços, e os usuários são conectados de forma intermitente e mudam seu endereço IP.
### 9) O que é um processo, no contexto do desenvolvimento de aplicações de internet, e como eles são identificados para efeitos de comunicação?
- Processos são programas rodando em um nó da rede.
    - processo cliente: processos que iniciam a comunicação.
    - processo servidor: processo que espera pela conexão.
- O identificador de um processo é constituído um endereço IP e uma porta.
### 10) Explique o que é SSL, no contexto da internet.
SLL (Secure Sockets Layer) é um protocolo de internet, que está na camada de aplicação do modelo OSI. Ele oferece encriptação para conexões TCP, integridade dos dados e autenticação de destinatário.
### 11) Em um documento html, quantos são os filhos do nó raiz? Há limite para o número de descendentes do nó raiz? Justifique sua resposta.
- Em um documento HTML, o nó raiz é representado pela tag `<html>`. De acordo com a especificação do HTML, um documento HTML pode ter exatamente dois filhos diretos do nó raiz: `<head>` e `<body>`.
- Quanto ao limite para o número de descendentes do nó raiz, não há um limite definido na especificação do HTML. Um documento HTML pode ter um número arbitrário de elementos descendentes do nó raiz.
### 12) Ao construir documentos html, é recomendado que usemos marcação que forneça significado (semântica) para os componentes do documento. Sendo assim, cite ao menos 5 tipos de elementos de marcação ou organização de conteúdo, além de 5 tipos de elementos de marcação semântica, explicando o significado de todos eles.
- Elementos de marcação ou organização de conteúdo:
    - **header** (Cabeçalho): O elemento **header** é utilizado para representar o cabeçalho de uma seção ou página. Pode conter elementos como logotipos, menus de navegação, títulos e outras informações relacionadas ao topo do conteúdo.
    - **footer** (Rodapé): O elemento **footer** é usado para representar o rodapé de uma seção ou página. Geralmente contém informações como informações de contato, links para redes sociais, créditos e direitos autorais.
    - **nav** (Navegação): O elemento **nav** é usado para representar uma seção de navegação em uma página ou site. Ele geralmente contém links de navegação, como menus de navegação principal ou secundário.
    - **article** (Artigo): O elemento **article** é utilizado para representar um conteúdo independente e autossuficiente em uma página ou site, como uma postagem de blog, um artigo de notícia ou um comentário.
    - **section** (Seção): O elemento **section** é usado para representar uma seção genérica ou agrupamento de conteúdo em uma página. Ele ajuda a organizar o conteúdo em partes distintas e significativas.
- Elementos de marcação semântica:
    - **div** (Divisão): O elemento **div** é utilizado para dividir o conteúdo de uma página HTML em blocos ou seções distintas. É comumente usado como um contêiner genérico para agrupar elementos relacionados e aplicar estilos CSS a eles.
    - **span** (Span): O elemento **span** é semelhante ao div, mas é usado para aplicar estilos ou scripts a partes específicas do texto ou conteúdo dentro de um bloco de texto, sem quebrar a estrutura do documento.
    - **ul** (Lista Não Ordenada): O elemento **ul** é usado para criar uma lista não ordenada de itens. Cada item da lista é representado por um elemento **li** (Item de Lista).
    - **ol** (Lista Ordenada): O elemento **ol** é usado para criar uma lista ordenada de itens. Assim como **ul**, cada item é representado por um elemento **li**.
    - **p** (Parágrafo): O elemento **p** é utilizado para representar parágrafos de texto em um documento HTML. É usado para separar blocos de texto em unidades lógicas, como parágrafos individuais.
### 13) Qual elemento é utilizado para que um documento html capture informações dos usuários?
O elemento utilizado para capturar informações dos usuários em um documento HTML é o **form**. O elemento <form> é uma parte fundamental do HTML usado para criar formulários interativos que permitem aos usuários inserir dados que podem ser enviados para um servidor para processamento.
### 14) Qual elemento é utilizado para permitir a navegação entre diferentes documentos html?
O elemento utilizado para permitir a navegação entre diferentes documentos HTML é o **a**, que representa um hiperlink, ou seja, um link que direciona o usuário para outra página da web.
O elemento **a** é usado em conjunto com o atributo href, que especifica o URL do documento para o qual o usuário será direcionado ao clicar no link.
### 15) Enumere ao menos cinco elementos utilizados em formulários html explicando sua utilidade.
- 1- **label**: Ele é usado para associar um rótulo descritivo a um campo de entrada, melhorando a acessibilidade e a usabilidade do formulário.
- 2- **input**: Ele pode ser usado para capturar diversos tipos de dados, como texto, números, e-mails, senhas, entre outros.  
- 3- **select**: Ele é usado para criar listas suspensas (dropdowns) em um formulário, onde os usuários podem selecionar uma opção a partir de uma lista de opções predefinidas.
- 4: **button**: Ele é utilizado para criar botões em um formulário que podem ser clicados pelos usuários para enviar o formulário, realizar uma ação específica ou executar um script.
- 5: **textarea**: Ele é utilizado para criar áreas de texto multi-linha em um formulário, permitindo aos usuários inserir blocos de texto mais extensos, como mensagens, comentários ou descrições.     
### 16) Explique o que são e para que são utilizados os seguintes atributos html:
- a) class:
    - O atributo class é utilizado para definir uma ou mais classes CSS a um elemento HTML.
    - Ele é usado para agrupar elementos que compartilham estilos semelhantes ou comportamentos específicos.
    - Com a classe definida, é possível aplicar estilos CSS ou comportamentos JavaScript a todos os elementos que possuem essa classe, sem a necessidade de repetir o código para cada elemento. 
- b) id:
    - O atributo id é usado para fornecer uma identificação única para um elemento HTML em um documento.
    - Cada elemento em um documento HTML deve ter um id exclusivo dentro do contexto do documento.
    - O id é frequentemente usado para direcionar estilos CSS específicos ou manipulação de JavaScript para um único elemento.
- c) name:
    - O atributo name é usado em diferentes contextos em HTML, dependendo do elemento ao qual é aplicado.
    - Em elementos de formulário, como input, textarea e select, o atributo name é usado para identificar o campo quando o formulário é enviado para o servidor.
    - Em elementos como a, <mg, e map, o atributo name é usado como um identificador para ancoragem, permitindo que os links direcionem para um local específico em uma página.
- d) hidden:
    - O atributo hidden é usado para ocultar um elemento HTML de forma que ele não seja exibido na renderização padrão da página.
    - Elementos ocultos ainda estão presentes no DOM (Modelo de Objeto de Documento) e podem ser manipulados por scripts.
    - Isso é útil para ocultar elementos que podem ser exibidos posteriormente em resposta a interações do usuário ou para fornecer dados para processamento em segundo plano.
- e) style:
    - O atributo style é usado para definir estilos CSS diretamente em um elemento HTML, sem a necessidade de usar uma folha de estilo externa ou interna (tag style).
    - Os estilos definidos dentro do atributo style substituem quaisquer estilos definidos externamente ou em cascata.
    - O valor do atributo style consiste em pares de propriedade-valor separados por ponto e vírgula, por exemplo: style="color: red; font-size: 16px;".
- f) title:
    - O atributo title é utilizado para fornecer informações adicionais sobre um elemento quando o cursor do mouse é posicionado sobre ele (tooltip).
    - É especialmente útil para fornecer descrições breves e contextuais sobre o conteúdo de um elemento, como o significado de um ícone ou o propósito de um link.
    - O texto fornecido no atributo title é exibido automaticamente pelos navegadores quando o usuário passa o mouse sobre o elemento.
### 17) O que seria “degradação graciosa”, também conhecida com “degradação elegante”?
- Degradação graciosa, também conhecida como degradação elegante, refere-se à prática de desenvolver um sistema ou uma tecnologia de forma que funcione em uma ampla variedade de ambientes, mesmo que nem todos os recursos ou funcionalidades estejam disponíveis.
-  Isso significa que, se uma parte do sistema não for suportada ou não estiver disponível em determinado ambiente (como um navegador mais antigo), o sistema ainda será capaz de fornecer uma experiência utilizável, embora possa ser um pouco simplificada.
- Em essência, a degradação graciosa é sobre garantir que o sistema ainda seja funcional e acessível para o maior número possível de usuários, independentemente das limitações do ambiente em que está sendo executado.
### 18) Diferencie e caracterize os conceitos de regra, seletor e declaração no contexto do CSS.
Diferencie e caracterize os conceitos de regra, seletor e declaração no contexto do CSS.
- **Seletor**:
   - Um seletor é usado para selecionar elementos HTML aos quais a regra CSS será aplicada.
   - Pode ser qualquer expressão que identifique um ou mais elementos HTML, como nomes de elementos, classes, IDs, atributos, pseudoclasses e pseudoelementos.
   - Por exemplo, o seletor `h1` seleciona todos os elementos `<h1>` na página, enquanto o seletor `.classe` seleciona todos os elementos com a classe especificada.
- **Declaração**:
   - Uma declaração é composta por uma propriedade e um valor, separados por dois pontos `:` e terminados por um ponto e vírgula `;`.
   - Define como os elementos selecionados pelo seletor serão estilizados.
   - Por exemplo, em `color: blue;`, `color` é a propriedade CSS que define a cor do texto, e `blue` é o valor atribuído a essa propriedade.
- **Regra**:
   - Uma regra CSS é composta por um seletor seguido por um conjunto de declarações dentro de chaves `{ }`.
   - Define um conjunto de estilos que serão aplicados aos elementos selecionados pelo seletor.
   - Por exemplo, a regra `h1 { color: blue; }` aplica a cor azul a todos os elementos `<h1>` na página.
### 19) Diferencie os conceitos de “seletor de classe” e “seletor de id”, no contexto do CSS, fornecendo exemplos de cada um deles.
- Seletor de classe: O(s) elemento(s) na página com a classe especificada. Várias instâncias da mesma classe podem aparecer em uma página.
- Seletor de id: O elemento na página com o ID específicado. Em uma determinada página HTML cada valor da página deve ser único.
### 20) No contexto do CSS Box Model, explique os conceitos margin, border e padding
- Margin: O espaço externo a um elemento
- Border: A linha sólida do lado de fora do padding.
- Padding: O espaço ao redor do conteúdo (ex.: ao redor do texto de um parágrafo)..
### 21) Explique e dê exemplos funcionais de utilização das propriedades de posicionamento: static, relative, absolute e fixed.
- Static: Posicionamento padrão.
```.positioned {
  position: static;
  background: rgba(255,84,104,.3);
  border: 2px solid rgb(255,84,104);
  top: 30px;
  left: 30px;
  }
```
- Relative: Movimentação em relação a posição padrão (inclusive sobrepondo outros elementos).
```.positioned {
  position: relative;
  background: rgba(255,84,104,.3);
  border: 2px solid rgb(255,84,104);
  top: 30px;
  left: 30px;
  }
```
- Absolute: Retira o elemento do fluxo normal e o posiciona relativamente ao documento (ou ao seu elemento pai).
```.positioned {
  position: absolute;
  background: rgba(255,84,104,.3);
  border: 2px solid rgb(255,84,104);
  top: 30px;
  left: 30px;
  }
```
- Fixed: Retira o elemento do fluxo normal e o posiciona relativamente a viewport.
```.positioned {
  position: fixed;
  background: rgba(255,84,104,.3);
  border: 2px solid rgb(255,84,104);
  top: 30px;
  left: 30px;
  }
```
### 22) Como são definidos os blocos de comando no JavaScript?
Os blocos de comando no JavaScript são definidos utilizando chaves { }. Eles permitem agrupar uma ou mais instruções em um único bloco de código.
Exemplo:
```
if (condição) {
    // Este é um bloco de comando
    instrução1;
    instrução2;
    // E assim por diante
}
```
### 23) Quais as diferenças entre as declarações de variáveis em JavaScript usando let, var e const?
- **var**:
   - Forma tradicional de declarar variáveis antes do ES6.
   - Escopo de função ou global.
   - Pode ser redeclarada e atualizada em qualquer ponto do código.
- **let**:
   - Introduzida no ES6 como alternativa ao var.
   - Escopo de bloco (visível apenas dentro do bloco onde foi declarada).
   - Não pode ser redeclarada no mesmo escopo, mas pode ser atualizada.
- **const**:
   - Introduzida no ES6.
   - Escopo de bloco.
   - Cria uma variável cujo valor não pode ser alterado após a atribuição.
   - Deve ser inicializada com um valor no momento da declaração e não pode ser reatribuída.
   - Se a variável é uma referência a um objeto ou array, os valores dos membros do objeto ou elementos do array podem ser modificados.
