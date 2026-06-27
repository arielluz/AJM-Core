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

const ctx = document.getElementById('grafico');

new Chart(ctx,{
    type:'doughnut',
    data:{
        labels:['Seguro','Baixo','Moderado','Alto','Crítico'],
        datasets:[{
            data:[30,25,25,15,5],
            backgroundColor:[
                '#2ecc71',
                '#3498db',
                '#f1c40f',
                '#9b59b6',
                '#e74c3c'
            ]
        }]
    },
    options:{
        plugins:{
            legend:{
                labels:{
                    color:'white'
                }
            }
        }
    }
});