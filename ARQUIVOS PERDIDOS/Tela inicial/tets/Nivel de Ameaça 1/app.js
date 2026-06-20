const btn = document.getElementById("btnDepoimento");
const depoimento = document.getElementById("depoimentoElena");

btn.addEventListener("click", () => {

    if (depoimento.style.display === "block") {

        depoimento.style.display = "none";
        btn.innerText = "Ver Depoimento";

    } else {

        depoimento.style.display = "block";
        btn.innerText = "Fechar Depoimento";

    }

});

const btnVoltar = document.getElementById("btnVoltar");

const mensagemErro = document.getElementById("mensagemErro");

let tentativas = 0;

btnVoltar.addEventListener("click", () => {

    tentativas++;

    if(tentativas === 1){

        mensagemErro.style.display = "block";

        setTimeout(() => {

        mensagemErro.style.display = "none";

        }, 3000);
    }

    else{

        window.location.href = "../../informacao.html";

    }

});