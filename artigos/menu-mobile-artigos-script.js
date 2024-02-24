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
  });