function imprimeNomes(array){
    array.forEach((element) => console.log(element.nome));
}

function nomesPosicaoWhile(array){
    let i = 0;
    while(i < array.length){
        console.log(`A posição de ${array[i].nome} é ${array[i].posicao}`);
        i++;
    }
}

function nomesPosicaoFor(array){
    for(let i = 0; i < array.length; i++){
        console.log(`A altura de ${array[i].nome} é ${array[i].altura}`);
    }
}

function nomeCompletoForOf(array){
    for(let element of array){
        console.log(`O nome completo de ${element.nome} é ${element.nome_completo}`);
    }
}