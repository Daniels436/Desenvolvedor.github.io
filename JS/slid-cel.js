




// MOVIMENTO-DA-IMAGEM-TRAS-INVISIBLE-1s
  window.addEventListener('scroll', function() {
    var imgTopoSite = document.querySelector('.img-topo-site');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      imgTopoSite.style.display = 'none';
    } else {
      imgTopoSite.style.display = 'block';
    }
  });

  function toggleMenu() {
    var menuContent = document.querySelector(".menu-content");
    menuContent.style.display = (menuContent.style.display === "block") ? "none" : "block";
  }







//BALAO-INFORMATIVO-DE-TOPO-DA-PAGINA
var btnVoltarTopo = document.querySelector('.btn-topo');
var balaoInformativo = document.getElementById('balao-informativo');

btnVoltarTopo.addEventListener('click', function(event) {
  event.preventDefault(); // Impede o comportamento padrão do link

  // Verifica se já está no topo da página
  if (window.pageYOffset === 0) {
    exibirBalaoInformativo();
  } else {
    voltarAoTopo();
  }
});

function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function exibirBalaoInformativo() {
  balaoInformativo.style.display = 'block';

  // Remove o balão informativo após 2 segundos
  setTimeout(function() {
    balaoInformativo.style.display = 'none';
  }, 2000);
}