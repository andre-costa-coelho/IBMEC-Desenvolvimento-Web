let dados;

const divPesquisa = document.createElement('div');
divPesquisa.style.textAlign = 'center';
divPesquisa.style.padding = '2rem';

const inputPesquisa = document.createElement('input');
inputPesquisa.type = 'text';
inputPesquisa.style.width = '70%';
inputPesquisa.style.height = '2rem';
inputPesquisa.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px';
inputPesquisa.style.border = 'none';

divPesquisa.appendChild(inputPesquisa);

document.body.appendChild(divPesquisa);

const pegaDados = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}


pegaDados("https://botafogo-atletas.mange.li/feminino").then(
    (entrada) => {
        dados = entrada;
        entrada.forEach(
            (atleta) => {
                conteudo.appendChild(montaCard(atleta));
            }
        )
    });



const conteudo = document.createElement('div');
conteudo.style.display = 'flex';
conteudo.style.flexWrap = 'wrap';
conteudo.style.justifyContent = 'center';
conteudo.style.gap = '2rem';

document.body.appendChild(conteudo);

const montaCard = (entrada) => {
    const card = document.createElement('div');
    card.style.display = 'grid' ;
    card.style.gridTemplateColumns = '1fr 2fr';
    card.style.gridTemplateAreas = `
    "a1 a2"
    "a1 a3"
    "a4 a4"
    "a5 a5"
    "a6 a6"
    `;
    card.style.width = '30rem';
    card.style.borderRadius = '3%';
    card.style.boxShadow = 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px';
    card.style.padding = '3rem';

    const imgContainer = document.createElement('div');
    imgContainer.style.gridArea = 'a1';
    imgContainer.style.display = 'flex';
    imgContainer.style.alignItems = 'center';
    imgContainer.style.justifyContent = 'center';

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = 'Foto de ${entrada.nome}'; 
    imagem.style.width = '12rem';
    imagem.style.height = '12rem';
    imagem.style.borderRadius = '50%';
    imagem.style.border = '4px solid deeppink';
    imagem.style.objectFit = 'cover';
    imagem.style.objectPosition = 'top center';

    const posicao = document.createElement('p');
    posicao.innerHTML = entrada.posicao;
    posicao.style.cssText = 
    'grid-area: a2; display: flex; align-items: center; justify-content: center; text-transform: uppercase;';
    

    const nome = document.createElement('p');
    nome.innerHTML = entrada.nome;
    nome.className ='nome';

    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;
    descricao.style.gridArea = 'a4';
    
    const nascimento = document.createElement('p');
    nascimento.innerHTML = entrada.nascimento;
    nascimento.style.gridArea = 'a5';

    const escudoBotafogo = document.createElement('img');
    escudoBotafogo.src = 'https://imagepng.org/wp-content/uploads/2018/02/escudo-do-botafogo.png'; 
    escudoBotafogo.style.gridArea = 'a6'; 
    escudoBotafogo.style.width = '3rem'; 
    escudoBotafogo.style.height = 'auto'; 
    escudoBotafogo.style.justifySelf = 'right';




    card.appendChild(imgContainer);
    imgContainer.appendChild(imagem);   
    card.appendChild(posicao);
    card.appendChild(nome);
    card.appendChild(descricao);
    card.appendChild(nascimento);
    card.appendChild(escudoBotafogo);


    return card;

}


inputPesquisa.onkeyup = (ev) => {
    console.log(ev.target.value);

    if (inputPesquisa.value <= 3) {
        return;
    }

    const filtrado = dados.filter(
        (elemento) => {
            const nome = elemento.nome.toLowerCase().includes(ev.target.value.toLowerCase())
            const posicao = elemento.posicao.toLowerCase().includes(ev.target.value.toLowerCase())
            return nome || posicao
        }
    )
    conteudo.innerHTML = '';

    filtrado.forEach(
        (atleta) => {
            conteudo.appendChild(montaCard(atleta));
        }
    );
    
}

dados.forEach(
    (atleta) => {
        conteudo.appendChild(montaCard(atleta));
    }
);

