if (sessionStorage.getItem('logado')) {
    document.body.innerHTML = "<h1>ESCONDIDA!!!</h1><button id='logout'>logout</button>";
    document.getElementById('logout').onclick = () => {
    sessionStorage.removeItem('logado'); 
    window.location.href = "index.html";
    }
}