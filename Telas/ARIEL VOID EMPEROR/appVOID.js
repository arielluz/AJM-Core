
const telaIntro      = document.getElementById('tela-intro');
const telaTerror     = document.getElementById('tela-terror');
const telaExpulsao   = document.getElementById('tela-expulsao');
const layout         = document.getElementById('layout');

const btnDepoimento  = document.getElementById('btnDepoimento');
const btnVoltar      = document.getElementById('btnVoltar');
const depoimento     = document.getElementById('depoimentoElena');
const erro           = document.getElementById('mensagemErro');
const cardCaso       = document.getElementById('card-caso');

const contador       = document.getElementById('contador');
const progresso      = document.getElementById('expulsao-progresso');

telaIntro.addEventListener('click', function () {
  telaIntro.style.opacity = '0';
  telaIntro.style.transition = 'opacity 0.5s ease';

  setTimeout(function () {
    telaIntro.style.display = 'none';
    document.body.style.overflow = 'auto';
    layout.classList.add('visivel');
  }, 500);
});


btnDepoimento.addEventListener('click', function () {
  const chance = Math.random();

  cardCaso.style.display      = 'none';
  btnDepoimento.style.display = 'none';
  btnVoltar.style.display     = 'block';

  if (chance < 0.1) {
    erro.style.display       = 'block';
    depoimento.style.display = 'none';
  } else {
    depoimento.style.display = 'block';
    erro.style.display       = 'none';
  }
});


btnVoltar.addEventListener('click', function () {
  telaTerror.style.display = 'flex';
  telaTerror.style.alignItems = 'center';
  telaTerror.style.justifyContent = 'center';
});


telaTerror.addEventListener('click', function () {
  telaTerror.style.display = 'none';
  iniciarExpulsao();
});


function iniciarExpulsao() {
  telaExpulsao.style.display = 'block';

  let segundos = 5;
  contador.textContent = segundos;

 
  progresso.style.transition = 'width 5s linear';
  setTimeout(function () {
    progresso.style.width = '100%';
  }, 50);

 
  const intervalo = setInterval(function () {
    segundos--;
    contador.textContent = segundos;

    if (segundos <= 0) {
      clearInterval(intervalo);
      fecharSite();
    }
  }, 1000);
}

// ---- 6. Fecha o site com mensagem de erro do sistema ----
function fecharSite() {
  // Tenta fechar a aba
  window.close();

  // Se não conseguir fechar (bloqueio do navegador),
  // substitui a página inteira por uma tela de erro do sistema
  setTimeout(function () {
    document.body.innerHTML = `
      <div style="
        background: #000;
        color: #cc0000;
        font-family: 'Courier New', monospace;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
      ">
        <div style="font-size: 0.7rem; letter-spacing: 0.5em; color: #8b0000; margin-bottom: 2rem;">
          SISTEMA // ERRO CRÍTICO // CÓDIGO 000
        </div>

        <h1 style="
          font-size: clamp(2rem, 6vw, 4rem);
          color: #cc0000;
          text-shadow: 0 0 20px #ff0000;
          margin-bottom: 2rem;
          font-family: Georgia, serif;
        ">
          ACESSO ENCERRADO
        </h1>

        <p style="
          font-size: 0.85rem;
          color: #666;
          line-height: 2.5;
          max-width: 480px;
          margin-bottom: 3rem;
        ">
          O arquivo SCP-000 foi selado.<br>
          Sua sessão foi encerrada pelo sistema.<br>
          Suas memórias sobre este arquivo estão sendo apagadas.<br><br>
          <span style="color: #333;">
            Se você consegue ler isso,<br>
            ele permitiu.
          </span>
        </p>

        <div style="
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          color: #222;
          border-top: 1px solid #1a0000;
          padding-top: 1.5rem;
          width: 100%;
          max-width: 480px;
        ">
          SCP-000 // ARIEL VOID EMPEROR // REX ANOMALIARUM<br>
          FUNDAÇÃO SCP — NÍVEL O5 — ACESSO NEGADO
        </div>
      </div>
    `;
  }, 300);
}