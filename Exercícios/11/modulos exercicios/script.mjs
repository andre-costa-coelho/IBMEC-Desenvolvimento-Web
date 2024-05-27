import { hex_sha512 } from "./sha512.mjs";

const alvo = hex_sha512("senha123um_sal");
const sal = 'um_sal'

document.getElementById('btn_login').onclick = () => {
    const entrada = document.getElementById('senha').value;
    const mensagem =  document.getElementById('mensagem');
    if (hex_sha512(entrada + sal) === alvo) {
        mensagem.innerHTML = "<h2>Senha correta!</h2>";
        sessionStorage.setItem('logado', 1);
        window.location.href = "escondida.html";
    } else {     
        mensagem.innerHTML = "<h2>Senha incorreta!</h2>";
    }
}