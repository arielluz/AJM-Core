const blocos = [
    "INICIALIZANDO SISTEMA...",

    "Verificando arquivos...",

    "ERRO.",

    "Um arquivo não registrado foi encontrado.",

    "Nome: DESCONHECIDO",

    "Abrindo conteúdo...",

    "Se você está lendo isto, então o arquivo conseguiu ser recuperado.",

    "Algo aconteceu aqui.",

    "Algo que nunca deveria ter existido."
];

const container = document.getElementById("container");

let blocoAtual = 0;


const cursor = document.createElement("span");
cursor.className = "cursor";
cursor.textContent = "█";

function escreverBloco() {
    if (blocoAtual >= blocos.length) {
       
        revelarBotao();
        return;
    }

    const p = document.createElement("div");
    p.className = "paragrafo";
    container.appendChild(p);
    p.appendChild(cursor);

    let letra = 0;

    function digitar() {
        if (letra < blocos[blocoAtual].length) {
            
            cursor.insertAdjacentText("beforebegin", blocos[blocoAtual][letra]);
            letra++;
            setTimeout(digitar, 40);
        } else {
            blocoAtual++;

         
            setTimeout(escreverBloco, 1000);
        }
    }

    digitar();
}

escreverBloco();

function revelarBotao() {
    const btn = document.getElementById("btn-avancar");
    if (!btn) return;

    btn.classList.remove("oculto");
    btn.classList.add("visivel");

    btn.addEventListener("click", () => {
        window.location.href = "informacao.html";
    });
}