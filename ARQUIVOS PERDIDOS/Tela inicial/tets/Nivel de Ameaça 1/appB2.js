const btnInfo = document.querySelector("#btnInfo");

const conteudo = document.querySelector("#conteudo");

const bugTela = document.querySelector("#bugTela");

let etapa = 0;

btnInfo.addEventListener("click", () => {

    etapa++;

    if(etapa === 1){

        conteudo.innerHTML = `

        <h2>📍 14/03/1997</h2>

        <p>
        Primeiro avistamento.

        Três manequins foram encontrados
        em posições diferentes.
        </p>

        <hr>

        <h2>📍 18/03/1997</h2>

        <p>
        Um vigia relatou que os manequins
        mudavam de posição quando ele piscava.
        </p>

        <hr>

        <h2>📍 22/03/1997</h2>

        <p>
        A entidade foi catalogada.

        Nenhum movimento foi registrado.
        </p>

        `;

        btnInfo.innerText = "Ver Avisos";

    }

    else if(etapa === 2){

        bugTela.style.display = "block";

        document.body.classList.add("tremor");

        setTimeout(() => {

            bugTela.style.display = "none";

            document.body.classList.remove("tremor");

        }, 2000);

    }

    else{

        conteudo.innerHTML = `

        <h2>⚠ AVISOS</h2>

        <p>• Não permaneça sozinho.</p>

        <p>• Caso encontre um manequim
        em posição diferente,
        abandone o local.</p>

        <p>• Não toque na entidade.</p>

        <p>• Caso ouça passos,
        não olhe para trás.</p>

        `;

        btnInfo.style.display = "none";

    }
