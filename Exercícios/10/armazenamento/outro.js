const montaCard = (entrada) => {
    const card = document.createElement('article');
    card.style.display = 'grid';
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
    // card.style.cursor = 'pointer';
    card.style.transition = 'transform 0.2s, box-shadow 0.2s';  // Transição para animações suaves.

    card.dataset.id = entrada.id;
    card.dataset.elenco = entrada.elenco;
    card.dataset.nome = entrada.nome;
    card.dataset.posicao = entrada.posicao;
    card.dataset.imagem = entrada.imagem;
    card.dataset.descricao = entrada.descricao;
    card.dataset.nome_completo = entrada.nome_completo;
    card.dataset.nascimento = entrada.nascimento;
    card.dataset.altura = entrada.altura;

    /*card.addEventListener('click', () => {
        console.log(card.dataset.nome);
    });*/


// Animações do card:
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = 'rgba(14, 30, 37, 0.12) 0px 4px 8px 0px, rgba(14, 30, 37, 0.32) 0px 4px 24px 0px';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px';
    });

    card.addEventListener('mousedown', () => {
        card.style.transform = 'scale(0.98)';
    });

    card.addEventListener('mouseup', () => {
        card.style.transform = 'scale(1.05)';
    });
//---------------------------------------------

    const imgContainer = document.createElement('div');
    imgContainer.style.gridArea = 'a1';
    imgContainer.style.display = 'flex';
    imgContainer.style.alignItems = 'center';
    imgContainer.style.justifyContent = 'center';

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `Foto de ${entrada.nome}`;
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
    nome.className = 'nome';

    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;
    descricao.style.gridArea = 'a4';
    descricao.style.overflow = 'hidden';
    descricao.style.textOverflow = 'ellipsis';
    descricao.style.whiteSpace = 'no-wrap';

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


const acha_cookie = ( chave ) => {
    const array_cookies = document.cookie.split(';');
    const procurado = array_cookies.find(
        ( e ) => e.startsWith(`${chave}=`))
    return procurado?.split('=')[1];
}

let obj = {}

// com cookies
/*const array_cookies = document.cookie.split(';');
for (const par of array_cookies) {
    const partes = par.split('=');
    obj[partes[0]] = partes[1];
} */

// com localStorage item por item
const tamanhoLocalStorage = localStorage.length;
let chave;
for (let i = 0; i < tamanhoLocalStorage; i++) {
    chave = localStorage.key(i);
    obj[chave] = localStorage.getItem(chave);
}


// com localStorage JSON
//obj = JSON.parse(localStorage.getItem('atleta'));



document.body.appendChild(montaCard(obj));