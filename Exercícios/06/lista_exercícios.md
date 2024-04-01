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
- Uma tag é um elemento fundamental em HTML que define a estrutura e o significado dos elementos dentro de um documento. Podendo ser ags de abertura <tag> e tags de fechamento </tag>, que são usadas para envolver o conteúdo ao qual a tag se aplica.
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
### 9) O que é um processo, no contexto do desenvolvimento de aplicações de internet, e como eles são identificados para efeitos de comunicação?
### 10) Explique o que é SSL, no contexto da internet.
### 11) Em um documento html, quantos são os filhos do nó raiz? Há limite para o número de descendentes do nó raiz? Justifique sua resposta
### 12) Ao construir documentos html, é recomendado que usemos marcação que forneça significado (semântica) para os componentes do documento. Sendo assim, cite ao menos 5 tipos de elementos de marcação ou organização de conteúdo, além de 5 tipos de elementos de marcação semântica, explicando o significado de todos eles.
### 13) Qual elemento é utilizado para que um documento html capture informações dos usuários?
### 14) Qual elemento é utilizado para permitir a navegação entre diferentes documentos html?
### 15) Enumere ao menos cinco elementos utilizados em formulários html explicando sua utilidade.
### 16) Explique o que são e para que são utilizados os seguintes atributos html:
- a) class
- b) id
- c) name
- d) hidden
- e) style
- f) title
### 17) O que seria “degradação graciosa”, também conhecida com “degradação elegante”?
### 18) Diferencie e caracterize os conceitos de regra, seletor e declaração no contexto do CSS.
### 19) Diferencie os conceitos de “seletor de classe” e “seletor de id”, no contexto do CSS, fornecendo exemplos de cada um deles.
### 20) No contexto do CSS Box Model, explique os conceitos margin, border e padding
### 21) Explique e dê exemplos funcionais de utilização das propriedades de posicionamento: static, relative, absolute e fixed.
### 22) Como são definidos os blocos de comando no JavaScript?
### 23) Quais as diferenças entre as declarações de variáveis em JavaScript usando let, var e const?
