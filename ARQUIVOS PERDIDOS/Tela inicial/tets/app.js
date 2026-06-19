setTimeout(() => {
    window.location.href = "principal.html";
}, 3000); 

const botao = document.getElementById("btnEntidades");
const menu = document.getElementById("menuEntidades");

botao.addEventListener("click", () => {

    if (menu.style.display === "none") {
        menu.style.display = "block";
        botao.textContent = " FECHAR ENTIDADES";
    } else {
        menu.style.display = "none";
        botao.textContent = " ENTIDADES REGISTRADAS";
    }

});
