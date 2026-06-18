function toggleCriaturas() {
    const menu = document.getElementById("criaturasMenu");
    const button = document.querySelector(".tab:nth-child(2)");
  
    menu.classList.toggle("active");
    button.classList.toggle("active");
  }