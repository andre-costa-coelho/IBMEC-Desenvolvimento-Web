function func1(par){
    if (par % 2 == 0){
        var minhaVar = "é par"; // Variavel pode ser usada dentro da função.
    } else {
        var minhaVar ;
        minhaVar = "não é par";
    }

    return minhaVar;
}

function func2(par){
    if (par % 2 == 0){
        let minhaVar = "é par"; // Variavel só pode ser usada dentro do bloco.
    } else {
        let minhaVar ;
        minhaVar = "não é par";
    }

    return minhaVar;
}

function func3(par){
    let minhaVar;
    if (par % 2 == 0){
        minhaVar = "é par"; 
    } else {
        minhaVar = "não é par";
    }

    return minhaVar;
}

function func4(par){
    const minhaVar = "é par"; // Variavel constante.
    if (par % 2 == 0){
        minhaVar = "é par"; 
    } else {
        minhaVar = "não é par";
    }

    return minhaVar;
}

const meuArray = [];

console.log(meuArray);

meuArray[0] = 'primeiro'

console.log(meuArray);