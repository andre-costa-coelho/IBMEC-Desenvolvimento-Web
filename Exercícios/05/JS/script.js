/*let numero1 = 1;
numero1 = '1';

console.log(numero1); // Altera o valor incialmente declarado

const numero2 = 1;
numero2 = '1';

console.log(numero2);  Não altera o valor incialmente declarado*/

console.log('Iniciou');
let lista = ['Léo Pereira', 'Gabriel Barbosa', 'Bruno Henrique', 'Fabrício Bruno', 'de Arrascaeta']; //Lista original.
console.log(lista);

lista.push("Ayrton Lucas"); //Adiciona um elemento no final da lista.

console.log(lista.length); //Tamanho da lista.
console.log(lista); //Lista com um novo elemento.

lista.pop(); //Remove o último elemento da lista.
console.log(lista); //Lista sem o último elemento.

lista.shift(); //Remove o primeiro elemento da lista.
console.log(lista); //Lista sem o primeiro elemento.

lista.unshift('Pedro Rocha'); //Adiciona um elemento no início da lista.
console.log(lista); //Lista com um novo elemento no início.

console.log('Terminou');

function juntarPalavras(palavra1, palavra2){ // Criando uma função que recebe duas palavras.
    return palavra1 + palavra2; // Concatena duas palavras.
}

let palavra = juntarPalavras('Fla', 'mengo'); // Chamando a função e passando dois parâmetros.
console.log(palavra); // Exibindo a palavra concatenada.