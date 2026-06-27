const btn = document.getElementById("btnDepoimento");
const depoimento = document.getElementById("depoimento");

btn.addEventListener("click",()=>{

if(depoimento.style.display==="block"){

depoimento.style.display="none";
btn.innerHTML="Ler Registro";

}else{

depoimento.style.display="block";
btn.innerHTML="Fechar Registro";

}

});

const erro=document.getElementById("erro");
const voltar=document.getElementById("btnVoltar");

let clique=0;

voltar.addEventListener("click",()=>{

clique++;

if(clique==1){

erro.style.display="block";

setTimeout(()=>{

erro.style.display="none";

},3000);

}else if(clique==2){

    erro2.style.display="block";

    setTimeout(()=>{

        erro2.style.display="none";
        
        },3000);
} else{

    window.location.href="../info/informacao.html";

}

});

