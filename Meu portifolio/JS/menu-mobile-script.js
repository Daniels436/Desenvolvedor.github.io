
// FUNCINALIDADES-MENU-MOBILE

document.addEventListener("DOMContentLoaded", function() {
    // elementos do DOM
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu-mobile');
    const overlay = document.querySelector('.overlay-menu');

    // fechar menu
    const fecharMenu = () => {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    };

    // abrir menu
    const abrirMenu = () => {
        menu.classList.add('abrir-menu');
        overlay.style.display = 'block';
    };

    // abrir fechar menu
    const toggleMenu = () => {
        if (menu.classList.contains('abrir-menu')) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    };

    //  evento clique btn
    btnMenu.addEventListener('click', toggleMenu);

    // evento clique overlay 
    overlay.addEventListener('click', fecharMenu);

    // evento clique fechar menu
    menu.addEventListener('click', fecharMenu);
});