const btn = document.getElementById('btnLer');
const relato = document.getElementById('relato');
const alerta = document.getElementById('alerta');
let cliques = 0;
 
btn.addEventListener('click', () => {
  cliques++;
  if(cliques === 1){
    relato.style.display = 'block';
    btn.textContent = 'Fechar Registro';
  } else if(cliques === 2){
    relato.style.display = 'none';
    btn.textContent = 'Ler Registro de Incidente';
  } else if(cliques === 3){
    alerta.classList.add('ativo');
    setTimeout(()=> alerta.classList.remove('ativo'), 3000);
    cliques = 0;
  }
});