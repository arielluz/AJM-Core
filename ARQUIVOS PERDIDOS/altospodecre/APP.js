const btnCriaturas = document.getElementById("btnCriaturas");
const criaturasMenu = document.getElementById("criaturasMenu");

btnCriaturas.addEventListener("click", () => {
    criaturasMenu.classList.toggle("ativo");
});

btnCriaturas.addEventListener("click", () => {
    console.log("CLIQUE!");
    criaturasMenu.classList.toggle("ativo");
});
btnCriaturas.addEventListener("click", () => {
    if (criaturasMenu.style.display === "block") {
        criaturasMenu.style.display = "none";
    } else {
        criaturasMenu.style.display = "block";
    }

});