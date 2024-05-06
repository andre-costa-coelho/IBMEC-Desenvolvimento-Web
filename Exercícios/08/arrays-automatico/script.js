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

const atleta = dados[10];

const conteudo = document.getElementById('conteudo');

conteudo.innerHTML = `
    <div class = 'card'>
        <div class = 'imagem'>
        <img src = "${atleta.imagem}" alt = "${atleta.nome}">
        </div>
        <div class = 'posicao'>
        <p class='posicao'>${atleta.posicao}</p>
        </div>
        <div class = 'nome'>
        <p class='nome'>${atleta.nome}</p>
        </div>
        <div class = 'descricao'>
        <p class='descricao'>${atleta.descricao}</p>
        </div>
        <div class = 'nascimento'>
        <p class='nascimento'>${atleta.nascimento}</p>
        </div>
    </div>
 `;

 function criarCards(array){
    let cards = '';
    array.forEach((element) => {
        cards += `
        <div class = 'card'>
            <div class = 'imagem'>
            <img src = "${element.imagem}" alt = "${element.nome}">
            </div>
            <div class = 'posicao'>
            <p class='posicao'>${element.posicao}</p>
            </div>
            <div class = 'nome'>
            <p class='nome'>${element.nome}</p>
            </div>
            <div class = 'descricao'>
            <p class='descricao'>${element.descricao}</p>
            </div>
            <div class = 'nascimento'>
            <p class='nascimento'>${element.nascimento}</p>
            </div>
        </div>
        `;
    });
    conteudo.innerHTML = cards;
}