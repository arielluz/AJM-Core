document.addEventListener("DOMContentLoaded", () => {

    const btnVoltar = document.getElementById("btnVoltar");
    const mensagemErro = document.getElementById("mensagemErro");

    let tentativas = 0;

    btnVoltar.addEventListener("click", () => {

        tentativas++;

        if (tentativas === 1) {

            mensagemErro.style.display = "block";

            setTimeout(() => {
                mensagemErro.style.display = "none";
            }, 3000);

        } else {

            window.location.href = "../informacao.html";

        }

    });

});