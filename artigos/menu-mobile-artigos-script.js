// FUNCIONAMENTO-MENU-ARTIGOS-NAV
document.addEventListener("DOMContentLoaded", function() {
    const btnAbrirMenu = document.querySelector('.btn-abrir-menu');
    const menuMobile = document.querySelector('.menu-mobile-a');
    const overlayMenu = document.querySelector('.overlay-menu');
  
    btnAbrirMenu.addEventListener('click', () => {
        menuMobile.classList.add('abrir-menu');
        overlayMenu.style.display = 'block';
    });
  
    overlayMenu.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    });

    // Selecione o botão de fechar pelo ID
    var btnFechar = document.getElementById("btn-fechar-a");

    // Adicione um evento de clique ao botão de fechar
    btnFechar.addEventListener("click", function() {
        // Adicione ou remova a classe "abrir-menu" para abrir ou fechar o menu
        menuMobile.classList.remove("abrir-menu");
        overlayMenu.style.display = 'none';
    });
});